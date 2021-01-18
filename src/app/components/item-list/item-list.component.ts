import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() itemTitle: string = '';
  @Input() itemDescription: string = '';
  @Output() btnEditSelected: EventEmitter<ItemListModel> = new EventEmitter<ItemListModel>();
  @Output() btnDeleteSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() clickTitle: EventEmitter<string> = new EventEmitter<string>();

  isEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onBtnSelected(btnSelected: string) {
    if(btnSelected === 'edit') {
      this.isEdit = true;
    } else if(btnSelected === 'save') {
      this.isEdit = false;
      let item = new ItemListModel(this.itemTitle, this.itemDescription);
      this.btnEditSelected.emit(item);
    } else if(btnSelected === 'delete') {
      this.btnDeleteSelected.emit();
    }
  }

  onClickTitle() {
    if(!this.isEdit) {
      this.clickTitle.emit();
    }
  }
}

export class ItemListModel {
  public title:any;
  public description:string;
  
  constructor(
      title:any,
      description:string) {
    this.title = title;
    this.description = description;
  }
}
