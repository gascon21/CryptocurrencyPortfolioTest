import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Currency } from 'src/app/model/currency';
import { Portfolio } from 'src/app/model/portfolio';
import { PortfolioLine } from 'src/app/model/portfolio-line';

@Component({
  selector: 'add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent implements OnInit {
  @Input() typeModal: string = '';
  @Output() addPortfolioClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() addPortfolioLineClicked: EventEmitter<PortfolioLine> = new EventEmitter<PortfolioLine>();
  @Output() addCurrencyClicked: EventEmitter<Currency> = new EventEmitter<Currency>();

  showPortfolioModal = false;
  showPortfolioLineModal = false;
  showCurrencyModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickAdd() {
    switch (this.typeModal) {
      case 'portfolio':
        this.showPortfolioModal = true;
        break;
      case 'portfolioLine':
        this.showPortfolioLineModal = true;
        break;
      case 'currency':
        this.showCurrencyModal = true;
        break;
    }
  }

  closeModal() {
    switch (this.typeModal) {
      case 'portfolio':
        this.showPortfolioModal = false;
        break;
      case 'portfolioLine':
        this.showPortfolioLineModal = false;
        break;
      case 'currency':
        this.showCurrencyModal = false;
        break;
    }
  }

  savePortfolio(portfolioName: string) {
    this.showPortfolioModal = false;
    this.addPortfolioClicked.emit(portfolioName);
  }

  savePortfolioLine(portfolioLine: PortfolioLine) {
    this.showPortfolioLineModal = false;
    this.addPortfolioLineClicked.emit(portfolioLine);
  }
  
  saveCurrency(currency: Currency) {
    this.showCurrencyModal = false;
    this.addCurrencyClicked.emit(currency);
  }
}
