import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsWrapperPage } from '../tabs-wrapper/tabs-wrapper';
import { LoremipsumPage } from '../loremipsum-page/loremipsum-page';
/*
  Generated class for the Landing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-landing',
  templateUrl: 'landing-page.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  openTabsPage() {
    this.navCtrl.push(TabsWrapperPage);
  }

  openLoremIpsumPage() {
    this.navCtrl.push(LoremipsumPage);
  }
}
