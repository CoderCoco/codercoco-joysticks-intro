import { By, WebElement } from "selenium-webdriver";
import { Driver } from "../driver";
import { getRandomNumber, sleep, throwErrorIfNull } from "../util";
import {EMAIL, PASSWORD} from "../../../src/hacking-internals/inputs"
import { MultiBar, SingleBar } from "cli-progress";
import ansiColors from "ansi-colors";

export class LoginPage {
  private _emailBox: WebElement | null = null
  public get emailBox(): WebElement {
    return throwErrorIfNull(this._emailBox)
  }

  private _passwordBox: WebElement | null = null
  public get passwordBox(): WebElement {
    return throwErrorIfNull(this._passwordBox)
  }

  private _submitButton: WebElement | null = null
  public get submitButton(): WebElement {
    return throwErrorIfNull(this._submitButton)
  }

  private progressBar = new MultiBar({
    format: ansiColors.green('{name} ') + '|' + ansiColors.greenBright('{bar}') + '| {percentage}% ',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
  });

  constructor(public readonly selenium: Driver){}

  public async init(): Promise<void> {
    this._emailBox = await this.selenium.waitForElement(By.id("email"))
    this._passwordBox = await this.selenium.waitForElement(By.id("password"))
    this._submitButton = await this.selenium.waitForElement(By.id("submit-button"))
  }

  public async hackLoginPage(): Promise<void> {
    const p1 = this.fillInEmail();
    const p2 = this.fillInPassword();

    await Promise.all([p1, p2]);

    this.progressBar.stop();

    await sleep(100);
    await this.submitButton.click();
  }

  private async fillInEmail(): Promise<void> {
    const expectedEmail = EMAIL;
    const total = expectedEmail.length;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    const progressBar = this.progressBar.create(total + 1, 0);
    progressBar.update(0, {name: "Hacking Email   "})

    const getScrambled = (count: number) => {
      let scrambled = ''
    
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        scrambled += charset[randomIndex];
      }

      return scrambled
    }

    progressBar.increment()
    await this.updateEmail(getScrambled(total));

    for(let i = 1; i <= total; i++) {
      await sleep(getRandomNumber(100, 250))

      progressBar.increment()
      await this.updateEmail(expectedEmail.substring(0, i) + getScrambled(total - i))
    }

    progressBar.stop();
  }

  private async fillInPassword(): Promise<void> {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    const numLoops = 100;
    const waitTime = 50;

    const progressBar = this.progressBar.create(numLoops, 0);
    progressBar.update(0, {name: "Hacking Password"})

    const getScrambled = (count: number) => {
      let scrambled = ''
    
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        scrambled += charset[randomIndex];
      }

      return scrambled
    }

    for(let i = 0; i <= numLoops; i++) {
      await sleep(getRandomNumber(10, 100))

      progressBar.increment()
      await this.updatePassword(getScrambled(getRandomNumber(16, 32)));
    }

    progressBar.increment();
    await this.updatePassword(PASSWORD);

    progressBar.stop();
    

    await this.updatePassword(PASSWORD);
  }

  private async updateEmail(value: string): Promise<void> {
    await this.sendValueToField(value, "email");
  }

  private async updatePassword(value: string): Promise<void> {
    await this.sendValueToField(value, "password");
  }

  private async sendValueToField(value: string, fieldId: string): Promise<void> {
    await this.selenium
      .driver
      .executeScript(`
        const element = document.getElementById("${fieldId}");

        let lastValue = element.value;

        console.log(element);

        if (element == null) {
          console.error("element is null");
          return
        }

        console.warn("setting new element value", "${value}")

        element.value = "${value}"

        let event = new InputEvent('change', { 'bubbles': true, 'cancelable': true });
        let tracker = element._valueTracker;
        if (tracker) {
          tracker.setValue(lastValue);
        }
        event.target = element;
        element.dispatchEvent(event);
      `)
  }
}