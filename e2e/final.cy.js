Cypress.Commands.add("login", (username, pw) => {
  cy.get('input[name="login_email"]').type(username);
  cy.get('input[name="login_password"]').type(pw);
  cy.get('button[class="form-button"]').contains("ავტორიზაცია").click();
});

describe("final qa", () => {
  beforeEach(() => {
    cy.fixture("registration").as("registrationData");
  });
  it("პროდუქტის არჩევის დროს კალათის ლოგოზე არსებული რაოდენნობა უნდა გაიზარდოს ერთით", () => {
    cy.visit("https://zootopia.ge");
    cy.get('div[data-id="2858"]').last().click();
    cy.get('span[id="cart-items-count"]').contains("1");
  });
  it("როდესაც კალათაში პროდუქცია გვაქს 1,მინუსზე დაჭერისას უნდა ამოვარდეს", () => {
    cy.visit("https://zootopia.ge");
    cy.get('div[data-id="2858"]').last().click();
    cy.get('a[href="https://zootopia.ge/ka/cart"]').last().click();
    cy.get('button[class="minus change-qty-by-one"]').click();
  });

  it("როდესაც კალათაში პროდუქცია გვაქს 1,პლიუსზე დაჭერისას უნდა გახდეს 2,უნდა გაიზარდოს", () => {
    cy.visit("https://zootopia.ge");
    cy.get('div[data-id="2858"]').last().click();
    cy.get('a[href="https://zootopia.ge/ka/cart"]').last().click();
    cy.get('button[class="plus change-qty-by-one"]').click();
  });
  it("როცა მომხმარებელი შეიყვანს სწორ მონაცემებს უნდა ავტორიზირდეს", () => {
    cy.visit("https://zootopia.ge");
    cy.get('a[class="rprof"]').last().click();
    cy.login("vashakmadzeroma513@gmail.com", "chello123");
    cy.get('span[id="cart-items-count"]').contains("1");
  });

  it("რეგისტრაციის დროს,როდესაც მითითებულ პაროლს ვიმეორებთ არასწორად გაიმეორე პაროლის ველი უნდა გააწითლოს", () => {
    cy.get("@registrationData").then((data) => {
      cy.visit("https://zootopia.ge");
      cy.get('a[class="rprof"]').last().click();
      cy.get('a[href="https://zootopia.ge/ka/register"]').last().click();
      cy.get('input[name="first_name"]').type(data.name);
      cy.get('input[name="reg_email"]').type(data.email);
      cy.get('input[name="personal_id"]').type(data.pID);
      cy.get('input[name="phone"]').type(data.phone);
      cy.get('input[name="reg_password"]').type(data.password);
      cy.get('input[name="reg_password_confirmation"]').type("Password132");
      cy.get('label[for="etx"]').children("svg").click();
      cy.get("button").contains("რეგისტრაცია").click();
    });
  });
});
