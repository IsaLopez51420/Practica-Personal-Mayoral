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
  it("Agregar productos", () => {
    cy.wait(2000);
    cy.get(".css-118rwkj").should("be.visible").click();
    cy.wait(1500);
    cy.get('[data-testid="header-hamburger"]').should("be.visible").click();
    cy.wait(2000);
    cy.get(".Mui-open > .css-14g9439 > :nth-child(2)")
      .should("be.visible")
      .click();
    cy.wait(1500);
    cy.get(":nth-child(3) > .css-14g9439 > :nth-child(1)")
      .should("be.visible")
      .click();
    cy.wait(1500);
    cy.get(
      '[href="https://www.mayoral.com/es/es/nina/vestidos-02?breakdown=ads_f33010_ntk_cs%253A%2522Ni%25C3%25B1a%2B%257C%2B2%2Ba%2B9%2Ba%25C3%25B1os%2522"]'
    ).click();
    cy.wait(4000);
    cy.get(
      ':nth-child(3) > .css-1mtuw6b > .css-1lxwves > .css-jvk34y > [data-testid="product-card-name"] > .MuiTypography-root'
    )
      .should("be.visible")
      .click();
    cy.wait(1500);
    cy.get(".MuiSelect-select").should("be.visible").click(); //despliega select
    cy.get(".MuiPaper-root > .MuiList-root > :nth-child(2)")
      .should("be.visible")
      .click(); //elige talla
    cy.wait(1000);
    cy.get('[data-testid="add-to-cart-button"]').should("be.visible").click(); //añade carrito-fallo
    cy.wait(1000);
    cy.get(".css-1mmwe9a > .MuiButton-outlined").should("be.visible").click();
  });
});
