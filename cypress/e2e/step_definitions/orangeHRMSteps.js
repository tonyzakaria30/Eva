import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/LoginPage";
import AdminPage from "../../../pages/AdminPage";

const loginPage = new LoginPage();
const adminPage = new AdminPage();

let initialCount;
let newUsername;

Given("I am on the login page", () => {
  loginPage.visit();
});

When("I login with valid credentials", () => {
  loginPage.login("Admin", "admin123");
});

When("I navigate to the Admin section", () => {
  adminPage.goToAdminTab();
});

When("I record the current number of users", () => {
  adminPage.getRecordCount().then((count) => {
    initialCount = count;
  });
});

When("I add a new user", () => {
  newUsername = "testUser" + Date.now().toString().slice(-4);
  adminPage.clickAdd();
  adminPage.fillUserDetails(newUsername);
  adminPage.saveUser();
  cy.wait(2000);
});

Then("the number of users should increase by 1", () => {
  adminPage.goToAdminTab();
  adminPage.getRecordCount().should("eq", initialCount + 1);
});

When("I search for the new user", () => {
  adminPage.searchUser(newUsername);
});

When("I delete the user", () => {
  adminPage.deleteUser();
  cy.wait(2000);
});

Then("the number of users should decrease by 1", () => {
  adminPage.goToAdminTab();
  adminPage.getRecordCount().should("eq", initialCount);
});
