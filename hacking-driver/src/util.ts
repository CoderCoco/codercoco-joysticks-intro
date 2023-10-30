import { Locator, WebElement } from "selenium-webdriver";

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function throwErrorIfNull<T>(input: T | null): T {
  if (input == null) {
    throw new Error("Unable to read value!");
  }

  return input;
}