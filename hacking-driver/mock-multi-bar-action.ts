import { MultiBar } from "cli-progress";
import ansiColors from "ansi-colors";
import { sleep } from "./src/util";

export class MockMultiBarAction {
  private readonly multibar: MultiBar;

  private executingBars: Promise<void>[] = []

  constructor(
    nameColor: ansiColors.StyleFunction = ansiColors.magentaBright,
    barColor: ansiColors.StyleFunction = ansiColors.magenta
  ) {
      
      this.multibar = new MultiBar({
        format: nameColor('{name} ') + '|' + barColor('{bar}') + '| {percentage}% ',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
      });
  }

  /**
   * A utility function to mimic an action happening in the system.
   * @param name The name to specify in the bar
   * @param count The number of loops
   * @param loopDuration The count per loop
   */
  public addBar(name: string, count: number, loopDuration: number) {
    this.executingBars.push(this.executeLoop(name, count, loopDuration))
  }

  /**
   * Wait for all executing bars and then stop the multibar.
   */
  public async waitAll(): Promise<void> {
    await Promise.all(this.executingBars);
    this.multibar.stop();
  }

  private async executeLoop(name: string, count: number, loopDuration: number): Promise<void> {
    const progressBar = this.multibar.create(count, 0, {name})

    for (let i = 0; i <= count; i++) {
      progressBar.increment();
      await sleep(loopDuration);
    }

    progressBar.stop()
  }
}