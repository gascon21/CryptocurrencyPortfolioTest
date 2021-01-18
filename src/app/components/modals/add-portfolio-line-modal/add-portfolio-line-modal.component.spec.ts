import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPortfolioLineModalComponent } from './add-portfolio-line-modal.component';

describe('AddPortfolioLineModalComponent', () => {
  let component: AddPortfolioLineModalComponent;
  let fixture: ComponentFixture<AddPortfolioLineModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPortfolioLineModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPortfolioLineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
