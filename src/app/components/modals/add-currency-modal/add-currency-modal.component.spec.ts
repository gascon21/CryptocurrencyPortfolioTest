import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurrencyModalComponent } from './add-currency-modal.component';

describe('AddCurrencyModalComponent', () => {
  let component: AddCurrencyModalComponent;
  let fixture: ComponentFixture<AddCurrencyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCurrencyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCurrencyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
