import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Currency } from 'src/app/model/currency';

@Component({
  selector: 'add-currency-modal',
  templateUrl: './add-currency-modal.component.html',
  styleUrls: ['./add-currency-modal.component.scss']
})
export class AddCurrencyModalComponent implements OnInit {
  @Output() onSaveModal: EventEmitter<Currency> = new EventEmitter<Currency>();
  @Output() onCloseModal: EventEmitter<string> = new EventEmitter<string>();

  newCurrency: Currency = new Currency('', '');

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.onSaveModal.emit(this.newCurrency);
  }
  
  closeModal() {
    this.onCloseModal.emit();
  }
}
