import { RunTrackerPage } from './app.po';

describe('run-tracker App', () => {
  let page: RunTrackerPage;

  beforeEach(() => {
    page = new RunTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
