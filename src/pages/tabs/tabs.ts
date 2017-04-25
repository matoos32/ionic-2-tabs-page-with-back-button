import { Component,  Output, EventEmitter } from '@angular/core';
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

  // Use an @Output to double-dispatch the tabs' ion-select event.
  // A new event will be emitted that carries the selected tab's name.
  // The parent wrapper must catch this event to access the tab name.
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onTab(tabName: string) {
    this.notify.emit(tabName);
  }

  constructor() {}
}
