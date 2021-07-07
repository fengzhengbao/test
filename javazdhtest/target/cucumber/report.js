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
  "name": "在百度页面，输入正确的关键字进行搜索。测试修改scenario outline的情况。执行人测试，没有关联蓝鲸用户的情况下again and again",
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
  "name": "在百度页面，输入正确的关键字进行搜索。测试修改scenario outline的情况。执行人测试，没有关联蓝鲸用户的情况下again and again",
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
  "name": "在百度页面，输入正确的关键字进行搜索。测试修改scenario outline的情况。执行人测试，没有关联蓝鲸用户的情况下again and again",
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
  "name": "用例2，输入超长内容",
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
  "name": "用例3",
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
  "name": "用例4",
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
  "name": "测试5",
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
  "name": "用例6",
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
  "name": "用例6",
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
  "name": "用例6",
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
  "name": "用例7",
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
  "name": "用例8",
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
  "name": "用例9",
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
  "name": "测试10",
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
  "name": "用例11",
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
  "name": "用例11",
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
  "name": "用例11",
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
  "name": "用例12",
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
  "name": "用例13",
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
  "name": "用例14",
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
  "name": "测试15",
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
  "name": "用例16",
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
  "name": "用例16",
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
  "name": "用例16",
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
  "name": "用例17",
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
  "name": "用例18",
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
  "name": "用例19",
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
  "name": "测试20",
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
  "name": "用例21",
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
  "name": "用例21",
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
  "name": "用例21",
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
  "name": "用例22",
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
  "name": "用例23",
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
  "name": "用例24",
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
  "name": "测试25",
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
  "name": "用例26",
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
  "name": "用例26",
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
  "name": "用例26",
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
  "name": "用例27",
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
  "name": "用例28",
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
  "name": "用例29",
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
  "name": "测试30",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度搜索"
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
  "name": "用例2，输入超长内容",
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
  "name": "用例3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@百度一下"
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
formatter.embedding("image/png", "embedded39.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "用例4",
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
  "name": "测试5",
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
  "name": "用例6",
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
  "name": "用例6",
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
  "name": "用例6",
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
  "name": "用例7",
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
  "name": "用例8",
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
  "name": "用例9",
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
  "name": "测试10",
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
  "name": "用例11",
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
  "name": "用例11",
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
  "name": "用例11",
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
  "name": "用例12",
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
  "name": "用例13",
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
  "name": "用例14",
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
  "name": "测试15",
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
  "name": "用例16",
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
  "name": "用例16",
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
  "name": "用例16",
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
  "name": "用例17",
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
  "name": "用例18",
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
  "name": "用例19",
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
  "name": "测试20",
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
  "name": "用例21",
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
  "name": "用例21",
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
  "name": "用例21",
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
  "name": "用例22",
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
  "name": "用例23",
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
  "name": "用例24",
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
  "name": "测试25",
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
  "name": "用例26",
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
  "name": "用例26",
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
  "name": "用例26",
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
  "name": "用例27",
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
  "name": "用例28",
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
  "name": "用例29",
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
  "name": "测试30",
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
  "name": "用例2，输入超长内容",
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
  "name": "用例3",
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
  "name": "用例4",
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
  "name": "测试5",
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
  "name": "用例6",
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
  "name": "用例6",
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
  "name": "用例6",
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
  "name": "用例7",
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
  "name": "用例8",
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
  "name": "用例9",
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
  "name": "测试10",
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
  "name": "用例11",
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
  "name": "用例11",
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
  "name": "用例11",
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
  "name": "用例12",
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
  "name": "用例13",
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
  "name": "用例14",
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
  "name": "测试15",
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
  "name": "用例16",
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
  "name": "用例16",
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
  "name": "用例16",
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
  "name": "用例17",
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
  "name": "用例18",
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
  "name": "用例19",
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
  "name": "测试20",
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
  "name": "用例21",
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
  "name": "用例21",
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
  "name": "用例21",
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
  "name": "用例22",
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
  "name": "用例23",
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
  "name": "用例24",
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
  "name": "测试25",
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
  "name": "用例26",
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
  "name": "用例26",
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
  "name": "用例26",
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
  "name": "用例27",
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
  "name": "用例28",
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
  "name": "用例29",
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
  "name": "测试30",
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