Feature: OrangeHRM Admin Workflow

  Scenario: Add and delete user from Admin panel
    Given I open OrangeHRM login page
    When I login with username "Admin" and password "admin123"
    And I navigate to the Admin tab
    And I get the current record count
    And I add a new user with username "autoUser"
    Then the record count should increase by 1
    When I search for the user "autoUser"
    And I delete the user
    Then the record count should decrease by 1