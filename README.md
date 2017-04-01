# ionic-2-tabs-page-with-back-button
A simple wrapper-based solution for displaying a working back button in an ionic 2 tabs page.
This is _one_ solution to ionic bug #5351 https://github.com/driftyco/ionic/issues/5351.

The ionic 2 _tabs_ starter project was generated along with a simple text page and a landing page.
The root page of the app is set to the landing page. From within the landing page, two buttons
are provided to navigate to either the tabs page or the text page pushed onto the navigation stack.
The tabs page is simply a nested component inside of a boilerplate wrapper component. The wrapper
gets the navigation button and houses the tabs page.

See:
* https://github.com/matoos32/ionic-2-tabs-page-with-back-button/blob/master/src/pages/tabs-wrapper/tabs-wrapper.html
* https://github.com/matoos32/ionic-2-tabs-page-with-back-button/blob/master/src/pages/tabs/tabs.ts

### Browser app test
After cloning the repo:
1. Navigate to the project folder.
2. _npm update_
3. _ionic serve_
4. With the app launched in your browser, click on the tabs page button.

### Limitation
The tradeoff with this solution is you must remove the specific tab pages headers to not get a nested nav header bar.
Being able to dynamically set the parent wrapper's header title would be an improvement.
