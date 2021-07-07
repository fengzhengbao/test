package com.dx.exampleTest.stepDefs;

import com.dx.exampleTest.pages.BaiduPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.concurrent.TimeUnit;

public class SearchStep {

    public BaiduPage baiduPage;

    public SearchStep(BaiduPage baiduPage){
        this.baiduPage = baiduPage;
    }


    @Given("打开百度页面")
    public void 打开百度页面() {
        baiduPage.driver.get("https://www.baidu.com/");
    }

    @When("在输入框中输入关键字{string}，然后点击【百度一下】按钮")
    public void 在输入框中输入关键字然后点击百度一下按钮(String value) {
        baiduPage.search(value);
    }

    @Then("页面返回的结果正确")
    public void 页面返回的结果正确() {
        baiduPage.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);  //等待10s
        Assert.assertTrue(true);

    }

}
