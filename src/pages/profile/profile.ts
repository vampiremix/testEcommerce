import { profileModel } from './profile.model';
import { ProfileService } from './profile.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileData: profileModel = new profileModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileSV: ProfileService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

    this.profileSV.getData().then((data) => {
      this.profileData = data;
      console.log(this.profileData);
    }).catch((err) => {
      console.log(err);
    })
  }

}
