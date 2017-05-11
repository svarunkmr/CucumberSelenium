package stepDefinition;

import Base.baseUtil;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static java.lang.System.setProperty;

/**
 * Created by Arunkumar on 15-04-2017.
 */
public class login extends baseUtil
{

    private baseUtil base;


    public login(baseUtil base){
        this.base = base;
    }

    WebDriver dr;



    @Given("^Open Chrome and start application$")
    public void open_Chrome_and_start_application() throws Throwable {

        setProperty("webdriver.chrome.driver", "C:\\Users\\Arunkumar\\Downloads\\chromedriver_win32\\chromedriver.exe");
        dr = new ChromeDriver();
        dr.manage().window().maximize();
        dr.get("http://www.facebook.com");

    }


/*    @When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_enter_valid_and(String userName , String password) throws Throwable {


        dr.findElement(By.id("email")).sendKeys(userName);
        dr.findElement(By.id("pass")).sendKeys(password);

    }*/

   /* @When("^I enter valid credentials$")
    public void iEnterValidCredentials(DataTable table) throws Throwable {

        List<List<String>> data = table.raw();


        dr.findElement(By.id("email")).sendKeys(data.get(1).get(0));
        dr.findElement(By.id("pass")).sendKeys(data.get(1).get(1));*/

/*        System.out.println("The value is : " + data.get(0).get(0));
        System.out.println("The value is : " + data.get(0).get(1));
}*/


    @Then("^User should be able to login successfully$")
    public void user_should_be_able_to_login_successfully() throws Throwable {

        dr.findElement(By.id("u_0_q")).click();


    }

    @Then("^applicatioin should be closed$")
    public void applicatioin_should_be_closed() throws Throwable {


        System.out.println("The base value is : " + base.stepInfo);
        dr.quit();
    }







    @When("^application should be reopened again$")
    public void applicationShouldBeReopenedAgain() throws Throwable {

        setProperty("webdriver.chrome.driver", "C:\\Users\\Arunkumar\\Downloads\\chromedriver_win32\\chromedriver.exe");
        dr = new ChromeDriver();
        dr.manage().window().maximize();
        dr.get("http://www.facebook.com");
    }

    /*@And("^I enter valid credentials again$")
    public void iEnterValidCredentialsAgain(DataTable table) throws Throwable {

        List<List<String>> data = table.raw();


        dr.findElement(By.id("email")).sendKeys(data.get(1).get(0));
        dr.findElement(By.id("pass")).sendKeys(data.get(1).get(1));

    }*/

    @And("^User should be able to login successfully again$")
    public void userShouldBeAbleToLoginSuccessfullyAgain() throws Throwable {
        dr.findElement(By.id("u_0_q")).click();
    }

    @Then("^applicatioin should be closed again$")
    public void applicatioinShouldBeClosedAgain() throws Throwable {

        dr.quit();
    }


    @When("^I enter valid credentials \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iEnterValidCredentialsAnd(String uname, String password) throws Throwable {
        dr.findElement(By.id("email")).sendKeys(uname);
        dr.findElement(By.id("pass")).sendKeys(password);
    }

    @And("^I enter valid credentials again \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iEnterValidCredentialsAgainAnd(String uname, String password) throws Throwable {
        dr.findElement(By.id("email")).sendKeys(uname);
        dr.findElement(By.id("pass")).sendKeys(password);
    }
}
