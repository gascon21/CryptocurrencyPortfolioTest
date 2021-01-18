import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aditional-btns',
  templateUrl: './aditional-btns.component.html',
  styleUrls: ['./aditional-btns.component.scss']
})
export class AditionalBtnsComponent implements OnInit {
  @Output() btnSelected: EventEmitter<string> = new EventEmitter<string>();

  isEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickEdit() {
    this.isEdit = true;
    this.btnSelected.emit('edit');
  }
  onClickSave() {
    this.isEdit = false;
    this.btnSelected.emit('save');
  }
  onClickDelete() {
    this.btnSelected.emit('delete');
  }

}
