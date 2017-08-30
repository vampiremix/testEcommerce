import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopShowDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shop-show-detail',
  templateUrl: 'shop-show-detail.html'
})
export class ShopShowDetailComponent {
  @Input() shop: any;
  private map: any = {};
  private shopCover: any = {};
  // private shop: any;
  constructor() {
    console.log('Hello ShopShowDetailComponent Component');
    console.log("TEST     _________" + this.shop);
    // if (this.shopData) {
    // this.shop = this.shopData;
    //   console.log("HEYYY");
    //   this.shopCover = this.shop.coverimg;
    //   this.map = this.shop.map;
    // }


  }
}
