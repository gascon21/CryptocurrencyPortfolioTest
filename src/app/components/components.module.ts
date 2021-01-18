import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { AditionalBtnsComponent } from './aditional-btns/aditional-btns.component';
import { FormsModule } from '@angular/forms';
import { AddBtnComponent } from './add-btn/add-btn.component';
import { AddPortfolioModalComponent } from './modals/add-portfolio-modal/add-portfolio-modal.component';
import { AddPortfolioLineModalComponent } from './modals/add-portfolio-line-modal/add-portfolio-line-modal.component';
import { AddCurrencyModalComponent } from './modals/add-currency-modal/add-currency-modal.component';
import { DropdownCurrencyComponent } from './dropdown-currency/dropdown-currency.component';



@NgModule({
  declarations: [
    ItemListComponent,
    AditionalBtnsComponent,
    AddBtnComponent,
    AddPortfolioModalComponent,
    AddPortfolioLineModalComponent,
    AddCurrencyModalComponent,
    DropdownCurrencyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ItemListComponent,
    AditionalBtnsComponent,
    AddBtnComponent,
    AddPortfolioModalComponent,
    AddPortfolioLineModalComponent,
    AddCurrencyModalComponent,
    DropdownCurrencyComponent
  ]
})
export class ComponentsModule { }
