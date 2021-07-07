package com.dx.exampleTest;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/features"},
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
        glue = {"com.dx.exampleTest"}
        //tags = {"@百度搜索"}
)
public class RunCukesTest {

}