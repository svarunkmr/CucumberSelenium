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
        "welcome"
      ],
      "line": 10,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1069320,
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
  "name": "I enter valid credentials \"svarunbe\" and \"welcome\"",
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
  "duration": 4772757212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "svarunbe",
      "offset": 27
    },
    {
      "val": "welcome",
      "offset": 42
    }
  ],
  "location": "login.iEnterValidCredentialsAnd(String,String)"
});
formatter.result({
  "duration": 239673864,
  "status": "passed"
});
formatter.match({
  "location": "login.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 82969379,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d59.0.3071.115)\n  (Driver info: chromedriver\u003d2.29.461571 (8a88bbe0775e2a23afda0ceaf2ef7ee74e822cc5),platform\u003dLinux 4.8.0-58-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 35 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Arun-Ubuntu\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.8.0-58-generic\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461571 (8a88bbe0775e2a23afda0ceaf2ef7ee74e822cc5), userDataDir\u003d/tmp/.org.chromium.Chromium.uRO5AO}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d59.0.3071.115, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: a1bb8d9d7358a5cfb25529ed0def359d\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat stepDefinition.login.user_should_be_able_to_login_successfully(login.java:68)\n\tat ✽.Then User should be able to login successfully(src/test/java/features/login.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "login.applicatioin_should_be_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 121710,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 11,
      "value": "#      | dummy    | dummy        |"
    }
  ],
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
  "duration": 234330,
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
  "duration": 3423180892,
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
  "duration": 248147093,
  "status": "passed"
});
formatter.match({
  "location": "login.userShouldBeAbleToLoginSuccessfullyAgain()"
});
formatter.result({
  "duration": 54898415,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d59.0.3071.115)\n  (Driver info: chromedriver\u003d2.29.461571 (8a88bbe0775e2a23afda0ceaf2ef7ee74e822cc5),platform\u003dLinux 4.8.0-58-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 27 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Arun-Ubuntu\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.8.0-58-generic\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461571 (8a88bbe0775e2a23afda0ceaf2ef7ee74e822cc5), userDataDir\u003d/tmp/.org.chromium.Chromium.jdzUIY}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d59.0.3071.115, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 52e2b7eab2d2e89226de4dc322f44eaf\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat stepDefinition.login.userShouldBeAbleToLoginSuccessfullyAgain(login.java:110)\n\tat ✽.And User should be able to login successfully again(src/test/java/features/login.feature:16)\n",
  "status": "failed"
});
formatter.match({
  "location": "login.applicatioinShouldBeClosedAgain()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 136547,
  "status": "passed"
});
});