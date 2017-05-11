$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid credentials \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "applicatioin should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 9,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "svarunbe",
        "jothikumarbe"
      ],
      "line": 10,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "dummy",
        "dummy"
      ],
      "line": 11,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2145110,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid credentials \"svarunbe\" and \"jothikumarbe\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "applicatioin should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "login.open_Chrome_and_start_application()"
});
formatter.result({
  "duration": 10408310675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "svarunbe",
      "offset": 27
    },
    {
      "val": "jothikumarbe",
      "offset": 42
    }
  ],
  "location": "login.iEnterValidCredentialsAnd(String,String)"
});
formatter.result({
  "duration": 812150233,
  "status": "passed"
});
formatter.match({
  "location": "login.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 9405591655,
  "status": "passed"
});
formatter.match({
  "location": "login.applicatioin_should_be_closed()"
});
formatter.result({
  "duration": 1732071272,
  "status": "passed"
});
formatter.after({
  "duration": 259158,
  "status": "passed"
});
formatter.before({
  "duration": 417818,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid credentials \"dummy\" and \"dummy\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "applicatioin should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "login.open_Chrome_and_start_application()"
});
formatter.result({
  "duration": 6433792833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dummy",
      "offset": 27
    },
    {
      "val": "dummy",
      "offset": 39
    }
  ],
  "location": "login.iEnterValidCredentialsAnd(String,String)"
});
formatter.result({
  "duration": 607549281,
  "status": "passed"
});
formatter.match({
  "location": "login.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 2316392982,
  "status": "passed"
});
formatter.match({
  "location": "login.applicatioin_should_be_closed()"
});
formatter.result({
  "duration": 1104294410,
  "status": "passed"
});
formatter.after({
  "duration": 136421,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Test Login with valid credentials again",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials-again",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "application should be reopened again",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter valid credentials again \"\u003cnextUserName\u003e\" and \"\u003cnextPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should be able to login successfully again",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "applicatioin should be closed again",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials-again;",
  "rows": [
    {
      "cells": [
        "nextUserName",
        "nextPassword"
      ],
      "line": 19,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials-again;;1"
    },
    {
      "cells": [
        "dummy1",
        "dummy1"
      ],
      "line": 20,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials-again;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 978471,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Test Login with valid credentials again",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials-again;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "application should be reopened again",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter valid credentials again \"dummy1\" and \"dummy1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should be able to login successfully again",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "applicatioin should be closed again",
  "keyword": "Then "
});
formatter.match({
  "location": "login.applicationShouldBeReopenedAgain()"
});
formatter.result({
  "duration": 6249046974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dummy1",
      "offset": 33
    },
    {
      "val": "dummy1",
      "offset": 46
    }
  ],
  "location": "login.iEnterValidCredentialsAgainAnd(String,String)"
});
formatter.result({
  "duration": 694386022,
  "status": "passed"
});
formatter.match({
  "location": "login.userShouldBeAbleToLoginSuccessfullyAgain()"
});
formatter.result({
  "duration": 2822280487,
  "status": "passed"
});
formatter.match({
  "location": "login.applicatioinShouldBeClosedAgain()"
});
formatter.result({
  "duration": 1108921621,
  "status": "passed"
});
formatter.after({
  "duration": 147113,
  "status": "passed"
});
});