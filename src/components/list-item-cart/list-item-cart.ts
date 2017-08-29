import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the ListItemCartComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-item-cart',
  templateUrl: 'list-item-cart.html'
})
export class ListItemCartComponent {
  @Input() items: any;
  @Output() favorite = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();
  text: string;

  constructor() {
    console.log('Hello ListItemCartComponent Component');
    this.text = 'Hello World';
  }

  favoriteItem(item) {
    this.favorite.emit(item);
  }

  deleteItem(item, i) {
    console.log(i);
    item.index = i;
    this.delete.emit(item);
  }

  addQtyItem(item) {
    this.add.emit(item);

  }

  removeQtyItem(item) {
    this.remove.emit(item);
  }
}
