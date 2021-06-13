Feature: Login to application

    As a valid user 
    I want to log in into the application

    @focus
    Scenario: Valid login
     Given I open login page
     And I want to wait 1000 millisenconds
     When I login with username "standard_user" and password "secret_sauce" 
     Then I should see the inventory page