import { Locator, WebDriver, WebElement } from "selenium-webdriver";
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
    this._driver =  await new Builder().forBrowser("chrome").setChromeOptions(new chrome.Options().excludeSwitches("enable-logging")).build();
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