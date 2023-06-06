import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('Application tabs', () => {
  beforeEach(() => {
    cy.mount(AppComponent, {
      imports: [AppModule],
    });
  });

  it('should be a header', () => {
    cy.get('app-header').should('have.length', 3);
  });
});
