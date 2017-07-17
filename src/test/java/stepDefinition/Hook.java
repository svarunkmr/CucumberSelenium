package stepDefinition;


import Base.baseUtil;
import cucumber.api.java.After;
import cucumber.api.java.Before;
/**
 * Created by Arunkumar on 16-04-2017.
 */
public class Hook extends baseUtil {

    private baseUtil base;

    public Hook (baseUtil base)
    {

        this.base = base;
    }

    @Before
    public void InitializeTests()
    {
        base.stepInfo = "Chrome Driver start";
        System.out.println("Opening the browser ");
    }

    @After
    public void TearDownTests()
    {

        System.out.println("Closing the browser ");
        base.stepInfo = "Chrome Driver end";
    }
}
