package com.dx.exampleTest.pages;

import com.dx.exampleTest.common.BaseInit;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class BaiduPage extends BaseInit {

    @FindBy(id = "kw")
    public WebElement inputBox;

    @FindBy(id = "su")
    public WebElement searchBtn;

    public void search(String value){
        inputBox.sendKeys(value);
        searchBtn.click();

    }

}
