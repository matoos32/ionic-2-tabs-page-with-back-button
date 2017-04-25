import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsWrapperPage } from '../tabs-wrapper/tabs-wrapper';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing-page.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openTabsPage() {
    this.navCtrl.push(TabsWrapperPage);
  }
}
