import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tabs-wrapper',
  templateUrl: 'tabs-wrapper.html'
})
export class TabsWrapperPage {

  protected tabTitle: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  onTabChange(tabTitle: string) {
    this.tabTitle = tabTitle;
  }

}
