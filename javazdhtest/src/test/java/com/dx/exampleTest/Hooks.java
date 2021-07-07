package com.dx.exampleTest;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;


import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Hooks {
    public static WebDriver driver;

    @Before
    public void openBrowser() throws MalformedURLException {
        System.out.println("Open Browser...");


//        if ("Linux".equals(System.getProperty("os.name"))) {
//
//            DesiredCapabilities chromeCapabilities = DesiredCapabilities.chrome();
//            try {
//                driver = new RemoteWebDriver(new URL("http://127.0.0.1:4444/wd/hub"), chromeCapabilities);
//            } catch (MalformedURLException e) {
//                e.printStackTrace();
//            }
//        } else {
//            System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/chromedriver.exe");
//
//            ChromeOptions options = new ChromeOptions(); // 配置chrome启动选项
////            options.addArguments("--start-maximized","--disable-infobars");// 分别代表最大化窗口、禁止被自动化程序控制的提示、设置浏览器分辨率
//            options.addArguments("--headless");     // 静默模式
//
//            driver = new ChromeDriver(options);
//        }
        ChromeOptions chromeOptions = new ChromeOptions();

        chromeOptions.addArguments("--headless", "--no-sandbox", "--disable-gpu");
        driver = new ChromeDriver(chromeOptions);

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);    // 隐式等待10s
    }

    @After
    public void embedScreenshot(Scenario scenario) {
        System.out.println("Close Browser...");
        try {
            byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");

        } catch (WebDriverException somePlatformsDontSupportScreenshots) {
            System.err.println(somePlatformsDontSupportScreenshots.getMessage());
        }

        driver.quit();
    }
}