import { MainPageComponent } from './main-page.component';
import { MainPageModule } from './main-page.module';

describe('… Feature description …', () => {
  beforeEach(() => {
    cy.mount(MainPageComponent, {
      imports: [MainPageModule],
    });
  });

  it('Mount', () => {
    cy.mount(MainPageComponent);
  });

  it('should be a search', () => {
    cy.get('app-search').should('have.length', 1);
  });
});
