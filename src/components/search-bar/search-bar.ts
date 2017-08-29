import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the SearchBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.html'
})
export class SearchBarComponent {
  searchQuery: string = '';
  @Input() items: any;
  filterdata: any;
  @Output() dataFiltered = new EventEmitter<any>();
  text: string;
  constructor() {
    console.log('Hello SearchBarComponent Component');
    this.text = 'Hello World';
    this.initializeItems();
    this.getItems('');
  }
  initializeItems() {
    this.filterdata = this.items;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();


    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filterdata = this.filterdata.filter((item) => {

        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } this.dataFiltered.emit(this.filterdata || this.items);
    console.log(this.filterdata);
  }
}
