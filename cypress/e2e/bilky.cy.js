describe("Hour Registration Test", () => {
  it("should sign all available days and navigate through weeks", () => {
    cy.visit("https://panel.bilky.es/auth/login");
    cy.get("#taxid").type("DNI");
    cy.get("#password").type("PASSWORD");
    cy.get('button[type="submit"]').click();

    cy.get("#sidebarDashboards ul li:last-child a")
      .should("be.visible")
      .click();

    function handleWeekSigning() {
      cy.get("body").then(($body) => {
        const signButtons = $body.find("button#sign");

        if (signButtons.length > 0) {
          cy.get("button#sign")
            .each(($button) => {
              cy.wrap($button).click();

              cy.get("button.confirm").should("be.visible").click();

              cy.wait(2000);
            })
            .then(() => {
              cy.get('[data-direction="prev"]').click();
              cy.wait(2000);
              handleWeekSigning();
            });
        } else {
          cy.log("Up to date");
        }
      });
    }

    handleWeekSigning();
  });
});
