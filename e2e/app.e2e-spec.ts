import { APIPage } from './app.po';

describe('api App', () => {
  let page: APIPage;

  beforeEach(() => {
    page = new APIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
