Feature: Login to application

    As a valid user 
    I want to log in into the application

    Scenario: Valid login
     Given I open login page
     When I login with username "standard_user" and password "secret_sauce" 
     Then I should see the inventory page