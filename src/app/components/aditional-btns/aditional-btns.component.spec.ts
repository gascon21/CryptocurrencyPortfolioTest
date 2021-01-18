import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionalBtnsComponent } from './aditional-btns.component';

describe('AditionalBtnsComponent', () => {
  let component: AditionalBtnsComponent;
  let fixture: ComponentFixture<AditionalBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AditionalBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AditionalBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
