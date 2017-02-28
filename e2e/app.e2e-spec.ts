import { FirebaseBusinessDirectoryPage } from './app.po';

describe('firebase-business-directory App', function() {
  let page: FirebaseBusinessDirectoryPage;

  beforeEach(() => {
    page = new FirebaseBusinessDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
