package runner;


/**
 * Created by Arunkumar on 14-04-2017.
 */
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        features={"."},
        glue={"stepDefinition"},
        plugin = {"html:target/cucumber-pretty",
                "json:target/cucumber.json"}
//        plugin = {"html:target/cucumber_html_report",
//                "json:target/cucumber.json",
//                "pretty:cucumber_pretty.txt",
//                "usage:cucumber_usage.json",
//                "junit:cucumber_xml_report.xml"        }
)
public class CukesRunner {

}
