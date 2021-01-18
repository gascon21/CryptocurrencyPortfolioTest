import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemListModel } from 'src/app/components/item-list/item-list.component';
import { Portfolio } from 'src/app/model/portfolio';
import { PortfolioLine } from 'src/app/model/portfolio-line';
import { PortfolioLinesService } from 'src/app/services/portfolio-lines.service';

@Component({
    selector: 'app-portfolio-lines-list',
    templateUrl: './portfolio-lines-list.component.html',
    styleUrls: ['./portfolio-lines-list.component.scss']
})
export class PortfolioLinesListComponent implements OnInit {

    portfolioLines: PortfolioLine[];
    portfolio: Portfolio;

    constructor(
        private router: Router,
        private portfolioLinesService:PortfolioLinesService) {
        this.portfolioLines = this.router.getCurrentNavigation()?.extras.state?.portfolioLines;
        this.portfolio = this.router.getCurrentNavigation()?.extras.state?.portfolio;
    }

    ngOnInit(): void {
        if(!this.portfolioLines) {
            this.router.navigate(['/']);
        }
    }

    goHome() {
        this.router.navigate(['/']);
    }

    onBtnAddClicked(portfolioLine: PortfolioLine) {
        portfolioLine.portfolioUrl = 'http://localhost:8080/api/portfolio/' + this.portfolio.id;
        portfolioLine.currencyUrl = 'http://localhost:8080/api/currency/' + portfolioLine.currencyUrl;
        this.portfolioLinesService.createPortfolioLines(portfolioLine).then(portfolioLine => {
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
    }

    onBtnEditSelected(itemList:ItemListModel , portfolioLine: PortfolioLine) {
        portfolioLine.amount = itemList.title;
        portfolioLine.currencyUrl = 'http://localhost:8080/api/currency/' + itemList.description;
        this.portfolioLinesService.editPortfolioLines(portfolioLine).then(data => {});
    }

    onBtnDeleteSelected(portfolioLine: PortfolioLine) {
        this.portfolioLinesService.deletePortfolioLines(portfolioLine.id).then(data => {});
    }
}
