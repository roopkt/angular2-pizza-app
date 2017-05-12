import { AngularPizzaAppPage } from './app.po';

describe('angular-pizza-app App', () => {
  let page: AngularPizzaAppPage;

  beforeEach(() => {
    page = new AngularPizzaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
