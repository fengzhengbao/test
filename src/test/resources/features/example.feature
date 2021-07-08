@百度搜索
Feature: 搜索

  @搜索
  Scenario Outline: 用例在百度页面，输入正确的关键字进行搜索。测试修改scenario outline的情况。执行人测试，没有关联蓝鲸用户的情况下again and again
    Given 打开百度页面
    When 在输入框中输入关键字"<username>"，然后点击【百度一下】按钮
    
    Then 页面返回的结果正确

    Examples:
      | username  |
      | cucumber   |
      | python     |

  @用例2
  Scenario: 用例10002，输入超长内容
    Given 打开百度页面
    When 在输入框中输入关键字"junit"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

 @用例3
  Scenario: 用例10003
    Given 打开百度页面
    When 在输入框中输入关键字"自动化测试"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

 @用例4
  Scenario: 用例10004
    Given 打开百度页面
    When 在输入框中输入关键字"性能测试"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

 @用例5
  Scenario: 测试10005
    Given 打开百度页面
    When 在输入框中输入关键字"test"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例6
  Scenario Outline: 用例10006
    Given 打开百度页面
    When 在输入框中输入关键字"<username>"，然后点击【百度一下】按钮

    Then 页面返回的结果正确

    Examples:
      | username  |
      | cucumber   |
      | python     |

  @用例7
  Scenario: 用例10007
    Given 打开百度页面
    When 在输入框中输入关键字"junit"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例8
  Scenario: 用例10008
    Given 打开百度页面
    When 在输入框中输入关键字"自动化测试"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例9
  Scenario: 用例10009
    Given 打开百度页面
    When 在输入框中输入关键字"性能测试"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例10
  Scenario: 测试10010
    Given 打开百度页面
    When 在输入框中输入关键字"test"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例11
  Scenario Outline: 用例10011
    Given 打开百度页面
    When 在输入框中输入关键字"<username>"，然后点击【百度一下】按钮

    Then 页面返回的结果正确

    Examples:
      | username  |
      | cucumber   |
      | python     |

  @用例12
  Scenario: 用例10012
    Given 打开百度页面
    When 在输入框中输入关键字"junit"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例13
  Scenario: 用例10013
    Given 打开百度页面
    When 在输入框中输入关键字"自动化测试"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例14
  Scenario: 用例10014
    Given 打开百度页面
    When 在输入框中输入关键字"性能测试"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例15
  Scenario: 测试10015
    Given 打开百度页面
    When 在输入框中输入关键字"test"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例16
  Scenario Outline: 用例10016
    Given 打开百度页面
    When 在输入框中输入关键字"<username>"，然后点击【百度一下】按钮

    Then 页面返回的结果正确

    Examples:
      | username  |
      | cucumber   |
      | python     |

  @用例17
  Scenario: 用例10017
    Given 打开百度页面
    When 在输入框中输入关键字"junit"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例18
  Scenario: 用例10018
    Given 打开百度页面
    When 在输入框中输入关键字"自动化测试"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例19
  Scenario: 用例10019
    Given 打开百度页面
    When 在输入框中输入关键字"性能测试"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例20
  Scenario: 测试10020
    Given 打开百度页面
    When 在输入框中输入关键字"test"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例21
  Scenario Outline: 用例10021
    Given 打开百度页面
    When 在输入框中输入关键字"<username>"，然后点击【百度一下】按钮

    Then 页面返回的结果正确

    Examples:
      | username  |
      | cucumber   |
      | python     |

  @用例22
  Scenario: 用例10022
    Given 打开百度页面
    When 在输入框中输入关键字"junit"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例23
  Scenario: 用例10023
    Given 打开百度页面
    When 在输入框中输入关键字"自动化测试"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例24
  Scenario: 用例10024
    Given 打开百度页面
    When 在输入框中输入关键字"性能测试"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例25
  Scenario: 测试10025
    Given 打开百度页面
    When 在输入框中输入关键字"test"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例26
  Scenario Outline: 用例10026
    Given 打开百度页面
    When 在输入框中输入关键字"<username>"，然后点击【百度一下】按钮

    Then 页面返回的结果正确

    Examples:
      | username  |
      | cucumber   |
      | python     |

  @用例27
  Scenario: 用例10027
    Given 打开百度页面
    When 在输入框中输入关键字"junit"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例28
  Scenario: 用例10028
    Given 打开百度页面
    When 在输入框中输入关键字"自动化测试"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例29
  Scenario: 用例10029
    Given 打开百度页面
    When 在输入框中输入关键字"性能测试"，然后点击【百度一下】按钮
    Then 页面返回的结果正确

  @用例10030
  Scenario: 用例10030
    Given 打开百度页面
    When 在输入框中输入关键字"test"，然后点击【百度一下】按钮
    Then 页面返回的结果正确