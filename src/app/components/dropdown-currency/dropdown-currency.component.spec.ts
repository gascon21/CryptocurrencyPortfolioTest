import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCurrencyComponent } from './dropdown-currency.component';

describe('DropdownCurrencyComponent', () => {
  let component: DropdownCurrencyComponent;
  let fixture: ComponentFixture<DropdownCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
