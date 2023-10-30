import { Locator, WebDriver, WebElement, logging } from "selenium-webdriver";
import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
import { throwErrorIfNull } from "./util";

const joysticksUrl = "http://localhost:3000";

export class Driver {
  private _driver: WebDriver | null = null

  public get driver(): WebDriver {
    return throwErrorIfNull(this._driver)
  }

  constructor(){}

  public async init(): Promise<void> {
    // Redirect stdout to null to hide messages
    let originalWrite = process.stdout.write;
    process.stdout.write = () => true;

    // Suppress WebDriver logging
    const prefs = new logging.Preferences();
    prefs.setLevel(logging.Type.BROWSER, logging.Level.OFF);
    prefs.setLevel(logging.Type.DRIVER, logging.Level.OFF);

    this._driver =  await new Builder().forBrowser("chrome")
      .setLoggingPrefs(prefs)
      .setChromeOptions(
        new chrome.Options()
        .excludeSwitches("enable-logging")
      ).build();

    // Restore original stdout
    process.stdout.write = originalWrite;
    this.navigateToJoysticks()
  }

  public async navigateToJoysticks(): Promise<void> {
    await this.driver.get(joysticksUrl);
  }

  public async destroy(): Promise<void> {
    if (this._driver != null) {
      await this._driver.quit()
    }
  }

  /**
   * This function is really just a wrapper for find element for now. In the event
   * I need to add logic to wait for the element to display, we can update this
   * logic here.
   * @param locator The locator to search for.
   * @returns A promise of the WebElement that was located.
   */
  public async waitForElement(locator: Locator): Promise<WebElement> {
    return await this.driver.findElement(locator);
  }
}