class LoginPage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  }

  login(username, password) {
    cy.get("input[name='username']").type(username);
    cy.get("input[name='password']").type(password);
    cy.get("button[type='submit']").click();
  }
}

export default LoginPage;
