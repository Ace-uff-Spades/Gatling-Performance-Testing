Feature: To Test Restful api on Springboot

  Background:
    * url 'http://localhost:8080/login/'

  Scenario: login as admin
    * param user = 'admin'
    * param pwd = 'admin'
    When method get
    Then status 200
#    * print response
#    And match response contains 'admin is logged in.'


#  Scenario: add a few accounts
#    * def addUser1 = call read('file:login.feature') { userId:'Abhi', userPwd:'pwd11'}
#    * print addUser1.authResponse
#    * def addUser2 = call read('file:login.feature') { userId:'Darth', userPwd:'Vader'}
#    * print addUser2.authResponse
#    * def addUser3 = call read('file:login.feature') { userId:'Noah', userPwd:'pwd22'}
#    * print addUser3.response
#
#
#  Scenario: delete all users so that we can try again.
#    * url 'http://localhost:8080/login/deleteAll'
#    When method delete
#    Then status 200
#
#
  Scenario: logout
    * url 'http://localhost:8080/login/logout'
    When method get
    Then status 200
#    * print response

