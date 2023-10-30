import { MultiBar } from "cli-progress";
import { Driver } from "./driver";
import { LoginPage } from "./pages/login.po";
import { initHack } from "./progress-bar-init";
import { sleep } from "./util";
import { MockMultiBarAction } from "../mock-multi-bar-action";
import ansiColors from "ansi-colors";

const run = async () => {
  // Initialize a Chrome driver
  let driver = new Driver()

  await initHack();

  try {
    console.log("accessing webpage")
    console.log();
    await driver.init();

    const login = new LoginPage(driver);
    await login.init();
    await login.hackLoginPage();

    console.log();
    console.log("Uploading new user!");
    console.log()
    const fakeUpload = new MockMultiBarAction(
      ansiColors.yellowBright,
      ansiColors.redBright
    )

    fakeUpload.addBar("upload", 500, 25);

    await fakeUpload.waitAll()
    
    // Locate the input element by its name attribute and set its value
    // await driver.findElement(By.name("inputFieldName")).sendKeys("Hello, world!");
  } finally {
    // Close the browser
    await driver.destroy()
  }
};

run().catch(console.error);