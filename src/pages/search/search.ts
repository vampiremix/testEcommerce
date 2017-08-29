import { SearchModel } from './search.model';
import { SearchService } from './search.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  products: SearchModel = new SearchModel();
  showProducts: SearchModel = new SearchModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchSV: SearchService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');

    this.searchSV.getData().then((data) => {
      console.log("Data Search : " + data);
      this.products.items = data.items;
    }).catch((err) => { console.log("Search Data Err : " + err); })
  }
  testfn($event) {
    this.showProducts = $event;
  }

}
