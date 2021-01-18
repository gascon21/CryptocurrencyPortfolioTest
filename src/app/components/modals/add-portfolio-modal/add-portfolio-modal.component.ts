import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'add-portfolio-modal',
  templateUrl: './add-portfolio-modal.component.html',
  styleUrls: ['./add-portfolio-modal.component.scss']
})
export class AddPortfolioModalComponent implements OnInit {
  portfolioName: string = '';
  @Output() onSaveModal: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCloseModal: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.onSaveModal.emit(this.portfolioName);
  }
  
  closeModal() {
    this.onCloseModal.emit();
  }
}
