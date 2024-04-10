/// <reference types="Cypress" />

require("cypress-xpath");

describe("Login", () => {
  it("Permite a un usuario loguearse", () => {
    cy.visit("https://www.mayoral.com/es/es/");
    cy.wait(1500);
    cy.get("#onetrust-accept-btn-handler").click(); //Aceptar cookies
    cy.get('[data-testid="header-account"]').click(); //Abre menu login
    cy.get(
      '[data-testid="my-account-menu-unlogged-info"] > .MuiButtonBase-root'
    ).click();
    cy.get('[data-testid="email-input"] > .MuiInputBase-root')
      .should("be.visible")
      .type("isabel.lopez51420@gmail.com");
    cy.get('[data-testid="password-input"] > .MuiInputBase-root')
      .should("be.visible")
      .type("A123456a!");
    cy.get('[data-testid="submit-button"]').click();
  });
});
