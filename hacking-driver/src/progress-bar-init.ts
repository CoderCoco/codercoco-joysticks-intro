import { MultiBar } from "cli-progress";
import ansiColors from "ansi-colors";
import { sleep } from "./util";
import { MockMultiBarAction } from "./mock-multi-bar-action";

export async function initHack(): Promise<void> {
  await loadBinaries();
  await sleep(100);
  await verifyRoster();
  await sleep(100);
  await messWithMembers();
  await sleep(100);
  await uploadingSnacks();
  await sleep(200);
}

async function loadBinaries(): Promise<void> {
  console.log(ansiColors.yellow("loading binaries"));
  console.log();

  const mockBar = new MockMultiBarAction();
  const delayTime = 250;

  mockBar.addBar("hack.dll              ", 50, 75);
  await sleep(delayTime);
  mockBar.addBar("weeeeeeeee.exe        ", 100, 25);
  await sleep(delayTime);
  mockBar.addBar("not-tomorrow-today.dll", 10, 200);
  await sleep(delayTime);
  mockBar.addBar("joysticks-united.dll  ", 100, 10);
  await sleep(delayTime);
  mockBar.addBar("joker.exe             ", 100, 25);

  await mockBar.waitAll();

  console.log();
  console.log(ansiColors.green("binaries loaded"))
}

async function verifyRoster(): Promise<void> {
  console.log();
  console.log(ansiColors.yellow("verifying roster"))
  console.log();

  const mockBar = new MockMultiBarAction(
    ansiColors.bgBlueBright,
    ansiColors.cyanBright
  );
  const delayTime = 250;

  mockBar.addBar(" E To Interact", 100, 10);
  await sleep(delayTime);
  mockBar.addBar(" MilesG170    ", 100, 10);
  await sleep(delayTime);
  mockBar.addBar(" ToastGB      ", 100, 10);
  await sleep(delayTime);
  mockBar.addBar(" Xenostream38 ", 100, 10);

  await mockBar.waitAll();

  console.log();
  console.log(ansiColors.green("roster verified"));
  console.log();
}

async function messWithMembers(): Promise<void> {
  console.log();
  console.log(ansiColors.bgRed("changing stats"))
  console.log();

  const delayTime = 50;
  const loopCount = 50;
  const loopDelay = 40;

  const mockBar = new MockMultiBarAction(
    ansiColors.bgRed,
    ansiColors.red
  );

  mockBar.addBar(" Reducing funko budget    ", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" Uninstalling Destiny 2   ", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" Changing movie date      ", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" Applying non-kid friendly", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" flipping your and you're ", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" Applying raccoon stink   ", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" Removing the British     ", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" Unbuttering the toast    ", loopCount, loopDelay);

  await mockBar.waitAll()

  console.log();
  console.log(ansiColors.green("stats changed"));
  console.log(ansiColors.yellow("PENDING UPLOAD TO SERVER!"))
  console.log();
}

async function uploadingSnacks(): Promise<void> {
  console.log();
  console.log(ansiColors.yellow("changing stats"))
  console.log();

  const delayTime = 50;
  const loopCount = 50;
  const loopDelay = 40;

  const mockBar = new MockMultiBarAction();

  mockBar.addBar(" Kit-Kat        ", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" Skittles       ", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" Reese's Cups   ", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" Twizzlers      ", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" M&Ms           ", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" Sour Patch Kids", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" Snickers       ", loopCount, loopDelay);
  await sleep(delayTime);
  mockBar.addBar(" Twix           ", loopCount, loopDelay);

  await mockBar.waitAll()

  console.log();
  console.log(ansiColors.green("snacks uploaded"));
  console.log();
}
