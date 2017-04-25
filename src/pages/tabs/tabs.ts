import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'tabs', // Add a selector so you can nest your tabs page within the wrapper
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor() {}
}
