Feature: Login to application

    As a valid user 
    I want to log in into the application

    Scenario: Valid login
     Given I open login page
     When I submit login
     Then I should see the homepage