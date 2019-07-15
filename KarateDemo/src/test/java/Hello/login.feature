Feature: Reaccuring script to add users

Scenario: add a user
    Given url 'http://localhost:8080/login/add'
    And param user = userId
    And param pwd = userPwd
    * request {}
    When method post
    Then status 200
    And def authResponse = response
