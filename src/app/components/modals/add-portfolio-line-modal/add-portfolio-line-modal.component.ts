import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioLine } from 'src/app/model/portfolio-line';

@Component({
  selector: 'add-portfolio-line-modal',
  templateUrl: './add-portfolio-line-modal.component.html',
  styleUrls: ['./add-portfolio-line-modal.component.scss']
})
export class AddPortfolioLineModalComponent implements OnInit {
  @Output() onSaveModal: EventEmitter<PortfolioLine> = new EventEmitter<PortfolioLine>();
  @Output() onCloseModal: EventEmitter<string> = new EventEmitter<string>();

  newPortfolioLine: PortfolioLine = new PortfolioLine(0, '');

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.onSaveModal.emit(this.newPortfolioLine);
  }
  
  closeModal() {
    this.onCloseModal.emit();
  }
}
