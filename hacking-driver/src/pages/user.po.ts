import { MockMultiBarAction } from "../mock-multi-bar-action";
import ansiColors from "ansi-colors";
import { sleep, throwErrorIfNull } from "../util";
import { Key, WebElement } from "selenium-webdriver";
import { Driver } from "../driver";

export class UserPage {
  private _body: WebElement | null = null
  public get body(): WebElement {
    return throwErrorIfNull(this._body)
  }

  constructor(private readonly selenium: Driver) {}

  public async hack(): Promise<void> {
    console.log();
    console.log("Uploading new user!");
    console.log()
    const fakeUpload = new MockMultiBarAction(
      ansiColors.yellow,
      ansiColors.red
    )

    fakeUpload.addBar("upload", 500, 25);

    await fakeUpload.waitAll();

    // Perform the key combination Ctrl + Alt + C
    await this.selenium
      .driver
      .actions()
        .keyDown(Key.CONTROL)
        .keyDown(Key.ALT)
        .sendKeys('c')
        .keyUp(Key.ALT)
        .keyUp(Key.CONTROL)
      .perform();

    console.log();
    console.log(ansiColors.bgGreen("UPLOAD COMPLETE. WELCOME TO JOYSTICKS"));
    await sleep(120000);
  }
}