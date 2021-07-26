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
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10002，输入超长内容",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例2"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10003",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例3"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10004",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例4"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10005",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例5"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10006",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例6"
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
  "name": "用例10006",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例6"
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
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10006",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例6"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10007",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例7"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10008",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例8"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10009",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例9"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded10.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10010",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例10"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded11.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10011",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例11"
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
  "name": "用例10011",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例11"
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
formatter.embedding("image/png", "embedded12.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10011",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例11"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded13.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10012",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例12"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded14.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10013",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例13"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded15.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10014",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例14"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded16.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10015",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例15"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded17.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10016",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例16"
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
  "name": "用例10016",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例16"
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
formatter.embedding("image/png", "embedded18.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10016",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例16"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded19.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10017",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例17"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded20.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10018",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例18"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded21.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10019",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例19"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded22.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10020",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例20"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded23.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10021",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例21"
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
  "name": "用例10021",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例21"
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
formatter.embedding("image/png", "embedded24.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10021",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例21"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded25.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10022",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例22"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded26.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10023",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例23"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded27.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10024",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例24"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded28.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10025",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例25"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded29.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10026",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例26"
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
  "name": "用例10026",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例26"
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
formatter.embedding("image/png", "embedded30.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10026",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例26"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded31.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10027",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例27"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded32.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10028",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例28"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded33.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10029",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例29"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded34.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10030",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
    },
    {
      "name": "@用例10030"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded35.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/test1.feature");
formatter.feature({
  "name": "测试一",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@百度一下"
    }
  ]
});
formatter.scenarioOutline({
  "name": "在百度页面，输入正确的关键字进行搜索1",
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
  "name": "在百度页面，输入正确的关键字进行搜索1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度一下"
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
formatter.embedding("image/png", "embedded36.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "在百度页面，输入正确的关键字进行搜索1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度一下"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded37.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10062，输入超长内容",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例2"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded38.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10063",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例10063"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded39.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10064",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例4"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded40.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10065",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例5"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded41.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10066",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例6"
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
  "name": "用例10066",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例6"
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
formatter.embedding("image/png", "embedded42.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10066",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例6"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded43.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10067",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例7"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded44.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10068",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例8"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded45.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10069",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例9"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded46.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10070",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例10"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded47.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10071",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例11"
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
  "name": "用例10071",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例11"
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
formatter.embedding("image/png", "embedded48.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10071",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例11"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded49.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10072",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例12"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded50.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10073",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例13"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded51.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10074",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例14"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded52.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10075",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例15"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded53.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10076",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例16"
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
  "name": "用例10076",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例16"
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
formatter.embedding("image/png", "embedded54.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10076",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例16"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded55.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10077",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例17"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded56.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10078",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例18"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded57.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10079",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例19"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded58.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10080",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例20"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded59.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10081",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例21"
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
  "name": "用例10081",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例21"
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
formatter.embedding("image/png", "embedded60.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10081",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例21"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded61.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10082",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例22"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded62.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10083",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例23"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded63.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10084",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例24"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded64.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10085",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例25"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded65.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10086",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例26"
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
  "name": "用例10086",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例26"
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
formatter.embedding("image/png", "embedded66.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10086",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例26"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded67.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10087",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例27"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded68.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10088",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例28"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded69.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10089",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例29"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded70.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10090",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
    },
    {
      "name": "@用例30"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded71.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/test2.feature");
formatter.feature({
  "name": "测试二",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    }
  ]
});
formatter.scenarioOutline({
  "name": "在百度页面，输入正确的关键字进行搜索",
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
  "name": "在百度页面，输入正确的关键字进行搜索",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度CUCUMBER"
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
formatter.embedding("image/png", "embedded72.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "在百度页面，输入正确的关键字进行搜索",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度CUCUMBER"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded73.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10032，输入超长内容",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例2"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded74.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10033",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例3"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded75.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10034",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例4"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded76.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10035",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例5"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded77.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10036",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例6"
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
  "name": "用例10036",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例6"
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
formatter.embedding("image/png", "embedded78.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10036",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例6"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded79.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10037",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例7"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded80.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10038",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例8"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded81.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10039",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例9"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded82.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10040",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例10"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded83.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10041",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例11"
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
  "name": "用例10041",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例11"
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
formatter.embedding("image/png", "embedded84.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10041",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例11"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded85.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10042",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例12"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded86.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10043",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例13"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded87.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10044",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例14"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded88.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10045",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例15"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded89.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10046",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例16"
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
  "name": "用例10046",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例16"
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
formatter.embedding("image/png", "embedded90.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10046",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例16"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded91.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10047",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例17"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded92.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10048",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例18"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded93.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10049",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例19"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded94.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10050",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例20"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded95.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10051",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例21"
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
  "name": "用例10051",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例21"
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
formatter.embedding("image/png", "embedded96.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10051",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例21"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded97.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10052",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例22"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded98.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10053",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例23"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded99.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10054",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例24"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded100.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10055",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例25"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded101.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "用例10056",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@用例26"
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
  "name": "用例10056",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例26"
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
formatter.embedding("image/png", "embedded102.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10056",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例26"
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
  "name": "在输入框中输入关键字\"python\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded103.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10057",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例27"
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
  "name": "在输入框中输入关键字\"junit\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded104.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10058",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例28"
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
  "name": "在输入框中输入关键字\"自动化测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded105.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例10059",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例29"
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
  "name": "在输入框中输入关键字\"性能测试\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded106.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "测试10060",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度CUCUMBER"
    },
    {
      "name": "@用例30"
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
  "name": "在输入框中输入关键字\"test\"，然后点击【百度一下】按钮",
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
formatter.embedding("image/png", "embedded107.png", null);
formatter.after({
  "status": "passed"
});
});