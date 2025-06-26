class AdminPage {
  goToAdminTab() {
    cy.get("a[href='/web/index.php/admin/viewAdminModule']").click();
  }

  getRecordCount() {
    return cy.get(".oxd-table-card").its("length");
  }

  clickAdd() {
    cy.contains("Add").click();
  }

  fillUserDetails(username) {
    cy.get(".oxd-select-text").eq(0).click();
    cy.contains("ESS").click();
    cy.get(".oxd-input-group input").eq(1).type(username);
    cy.get(".oxd-select-text").eq(1).click();
    cy.contains("Enabled").click();
    cy.get("input[type='password']").eq(0).type("Password123!");
    cy.get("input[type='password']").eq(1).type("Password123!");
  }

  saveUser() {
    cy.contains("Save").click();
    cy.wait(2000);
  }

  searchUser(username) {
    cy.get(".oxd-input-group input").eq(1).clear().type(username);
    cy.contains("Search").click();
    cy.wait(1000);
  }

  deleteUser() {
    cy.get(".oxd-table-cell-actions button").eq(1).click();
    cy.contains("Yes, Delete").click();
    cy.wait(1000);
  }
}

export default AdminPage;
