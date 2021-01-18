import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { PortfolioLinesService } from 'src/app/services/portfolio-lines.service';
import { Currency } from '../../model/currency';
import { Portfolio } from '../../model/portfolio';
import { PortfolioLine } from '../../model/portfolio-line';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemListModel } from 'src/app/components/item-list/item-list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currencies: Currency[] = [];
  portfolios: Portfolio[] = [];
  portfolioLines: PortfolioLine[] = [];

  constructor(
      private currencyService:CurrencyService,
      private portfolioService:PortfolioService,
      private portfolioLinesService:PortfolioLinesService,
      private router: Router,
      private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.currencyService.getCurrencyList().then(data => {
      data._embedded.currencies.forEach( (currency: any) => {
        this.currencies.push(new Currency(
          currency.name,
          currency.acronym,
          currency.id
        ));
      });
    });
    this.portfolioService.getPortfolio().then(data => {
      data._embedded.portfolios.forEach( (portfolio: any) => {
        this.portfolios.push(new Portfolio(
          portfolio.id,
          portfolio.name
        ));
      });
    });
    
  }

  openDetail(portfolio: Portfolio) {
    this.portfolioLinesService.getPortfolioLines(portfolio.id).then(data => {
      data._embedded.portfolioLines.forEach( (portfolioLine: any) => {
        this.portfolioLinesService.getCurrency(portfolioLine._links.currency.href).then(currency => {
          this.portfolioLines.push(new PortfolioLine(
            portfolioLine.amount,
            portfolioLine._links.currency,
            currency.acronym,
            portfolioLine._links.portfolios,
            portfolioLine.id
          ));
        });
      });
    });

    this.router.navigate(['/portfolio-lines'], {
      relativeTo: this.route,
      state: { 
        portfolio: portfolio,
        portfolioLines: this.portfolioLines
      },
    });
  }

  onBtnAddClicked(portfolioName: string) {
    this.portfolioService.createPortfolio(portfolioName).then(data => {
      this.portfolios.push(new Portfolio (data.id, data.name));
    });
  }

  onBtnEditSelected(itemList: ItemListModel, portfolio: Portfolio) {
    portfolio.name = itemList.title;
    this.portfolioService.editPortfolio(portfolio).then(data => {});
  }

  onBtnDeleteSelected(portfolio: Portfolio) {
    this.portfolioService.deletePortfolio(portfolio.id).then(data => {});
  }
}
