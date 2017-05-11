Feature: Test facebook smoke scenario

  Scenario Outline: Test Login with valid credentials
    Given Open Chrome and start application
    When I enter valid credentials "<UserName>" and "<Password>"
    Then User should be able to login successfully
    Then applicatioin should be closed
    Examples:
      | UserName | Password     |
      | svarunbe | jothikumarbe |
      | dummy    | dummy        |

  Scenario Outline: Test Login with valid credentials again
    When application should be reopened again
    And I enter valid credentials again "<nextUserName>" and "<nextPassword>"
    And User should be able to login successfully again
    Then applicatioin should be closed again
    Examples:
      | nextUserName | nextPassword |
      | dummy1       | dummy1       |
#      | dummy2       | dummy2       |

