$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/example.feature");
formatter.feature({
  "name": "搜索",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@百度搜索"
    }
  ]
});
formatter.scenarioOutline({
  "name": "用例在百度页面，输入正确的关键字进行搜索。测试修改scenario outline的情况。执行人测试，没有关联蓝鲸用户的情况下again and again",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@搜索"
    }
  ]
});
formatter.step({
  "name": "打开百度页面",
  "keyword": "Given "
});
formatter.step({
  "name": "在输入框中输入关键字\"\u003cusername\u003e\"，然后点击【百度一下】按钮",
  "keyword": "When "
});
formatter.step({
  "name": "页面返回的结果正确",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username"
      ]
    },
    {
      "cells": [
        "cucumber"
      ]
    },
    {
      "cells": [
        "python"
      ]
    }
  ]
});
formatter.scenario({
  "name": "用例在百度页面，输入正确的关键字进行搜索。测试修改scenario outline的情况。执行人测试，没有关联蓝鲸用户的情况下again and again",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@搜索"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "打开百度页面",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStep.打开百度页面()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "在输入框中输入关键字\"cucumber\"，然后点击【百度一下】按钮",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStep.在输入框中输入关键字然后点击百度一下按钮(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "页面返回的结果正确",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStep.页面返回的结果正确()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例在百度页面，输入正确的关键字进行搜索。测试修改scenario outline的情况。执行人测试，没有关联蓝鲸用户的情况下again and again",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@搜索"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "打开百度页面",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStep.打开百度页面()"
});
