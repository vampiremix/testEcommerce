import { ShopDetailModel } from './shop-detail.model';
import { ShopDetailService } from './shop-detail.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShopDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html',
})
export class ShopDetailPage {
  private shop: any;
  public shopDetail: ShopDetailModel = new ShopDetailModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public shopDetailSV: ShopDetailService) {
    this.shop = navParams.get('shop');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopDetailPage');
    this.shopDetailSV.getData().then((data) => {
      this.shopDetail.shop = data.shop;
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }

}
