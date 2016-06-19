import { Angular2samplePage } from './app.po';

describe('angular2sample App', function() {
  let page: Angular2samplePage;

  beforeEach(() => {
    page = new Angular2samplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
