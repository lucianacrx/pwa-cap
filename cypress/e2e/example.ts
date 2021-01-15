describe("Home page", () => {
  it("send me to trade's good coding practices manifest on click", () => {
    cy.visit("/").get(".Home__link").click();
  });
});

export {};
