/// <reference types="Cypress" />

require("cypress-xpath");

beforeEach(() => {
  cy.fixture("credenciales").then((credenciales) => {
    const { usuario, contraseña } = credenciales;
    // Iniciar sesión antes de cada prueba
    cy.visit("https://www.mayoral.com/es/es/");
    cy.wait(2000);
    cy.get("#onetrust-accept-btn-handler").click();
    cy.get('[data-testid="header-account"]').click();
    cy.get(
      '[data-testid="my-account-menu-unlogged-info"] > .MuiButtonBase-root'
    ).click();
    cy.get('[data-testid="email-input"] > .MuiInputBase-root').type(usuario);
    cy.get('[data-testid="password-input"] > .MuiInputBase-root').type(
      contraseña
    );
    cy.get('[data-testid="submit-button"]').click();
  });
});

describe("Sesión iniciada", () => {
  it("Ver productos", () => {
    cy.get('[data-testid="header-cart"]').click();
  });
});
