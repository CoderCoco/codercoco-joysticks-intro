import { MultiBar } from "cli-progress";
import ansiColors from "ansi-colors";
import { sleep } from "./util";
import { MockMultiBarAction } from "./mock-multi-bar-action";

export async function initHack(): Promise<void> {
  console.log(ansiColors.yellow("loading binaries"));
  console.log();
  await loadBinaries();
  console.log();
  console.log(ansiColors.green("binaries loaded"))

  await sleep(100);

  console.log();
  console.log(ansiColors.yellow("verifying roster"))
  console.log();
  await verifyRoster();
  console.log();
  console.log(ansiColors.green("roster verified"));
  console.log();

  await sleep(200);
}

async function loadBinaries(): Promise<void> {
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
}

async function verifyRoster(): Promise<void> {
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
}

