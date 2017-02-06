import { NgFhirExamplePage } from './app.po';

describe('ng-fhir-example App', function() {
  let page: NgFhirExamplePage;

  beforeEach(() => {
    page = new NgFhirExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
