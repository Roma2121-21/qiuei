Cypress.Commands.add("login", (username, pw) => {
  cy.get("a").contains("Login or register").click();
  cy.get('input[name="loginname"]').type(username);
  cy.get('input[name="password"]').type(pw);
  cy.get('button[title="Login"]').click();
});

describe("template spec", () => {
  it("change details", () => {
    cy.visit("https://automationteststore.com");
    cy.login("romanchello", "chello123");
    cy.get(
      'a[href="https://automationteststore.com/index.php?rt=account/edit"]'
    )
      .last()
      .click();
    cy.get('input[name="firstname"]').clear().type("Romani");
    cy.get('button[title="Continue"]').click();
    cy.get("div")
      .contains("Success: Your account has been successfully updated.")
      .should("be.visible");
  });

  it("change password", () => {
    cy.visit("https://automationteststore.com");
    cy.login("romanchello", "chello123");
    cy.get(
      'a[href="https://automationteststore.com/index.php?rt=account/password"]'
    )
      .last()
      .click();
    cy.get('input[name="current_password"]').clear().type("chello123");
    cy.get('input[name="password"]').clear().type("chello123");
    cy.get('input[name="confirm"]').clear().type("chello123");
    cy.get('button[title="Continue"]').click();
  });
});
