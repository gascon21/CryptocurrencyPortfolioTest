import { Component, OnInit, Input } from '@angular/core';
import { Currency } from 'src/app/model/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'dropdown-currency',
  templateUrl: './dropdown-currency.component.html',
  styleUrls: ['./dropdown-currency.component.scss']
})
export class DropdownCurrencyComponent implements OnInit {
    @Input() currencies: Currency[] = []; 
    showDropdown: boolean = false;

    constructor(private currencyService: CurrencyService) { }

    ngOnInit(): void {
    }

    toggleDropdown() {
        this.showDropdown = !this.showDropdown;
    }

    onBtnSelected(btnSelected: string, currencySelected: Currency) {
        if(btnSelected === 'edit') {
            currencySelected.isEdit = true;
        } else if(btnSelected === 'save') {
            currencySelected.isEdit = false;
            this.currencyService.editCurrency(currencySelected).then(data => {
        });
        } else if(btnSelected === 'delete') {
            currencySelected.isEdit = false;
            this.currencyService.deleteCurrency(currencySelected.id).then(data => {
        });
        }
    }

    onBtnAddClicked(newCurrency: Currency) {
        this.currencyService.createCurrency(newCurrency).then(data => {
          this.currencies.push(new Currency (newCurrency.name, newCurrency.acronym));
        });
    }
}
