import { Driver } from "./driver";
import { LoginPage } from "./pages/login.po";
import { sleep } from "./util";

const run = async () => {
  // Initialize a Chrome driver
  let driver = new Driver()

  try {
    await driver.init();

    const login = new LoginPage(driver);
    await login.init();
    await login.hackLoginPage();

    await sleep(10000);
    
    // Locate the input element by its name attribute and set its value
    // await driver.findElement(By.name("inputFieldName")).sendKeys("Hello, world!");
  } finally {
    // Close the browser
    await driver.destroy()
  }
};

run().catch(console.error);