describe("Counter testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });

  it("check counter is present or not", () => {
    cy.get("h1").should("exist");
    cy.get("button.add").should("exist");
    cy.get("button.reduce").should("exist");
  });

  it("inital value should be 0", () => {
    cy.get("[data-testid=counter] ").should("have.text", "Counter:0");
  });
});
