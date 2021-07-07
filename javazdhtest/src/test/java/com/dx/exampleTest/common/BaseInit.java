package com.dx.exampleTest.common;

import com.dx.exampleTest.Hooks;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseInit {

    public WebDriver driver;
    public WebDriverWait wait;
    public Actions action;

    public BaseInit() {
        driver = Hooks.driver;
        wait = new WebDriverWait(driver,30);
        action = new Actions(driver);
        PageFactory.initElements(driver, this);
    }

}
