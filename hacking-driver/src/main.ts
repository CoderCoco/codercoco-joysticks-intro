import { Driver } from "./driver";
import { LoginPage } from "./pages/login.po";
import { UserPage } from "./pages/user.po";
import { initHack } from "./progress-bar-init";

const run = async () => {
  // Initialize a Chrome driver
  let selenium = new Driver()

  await initHack();

  try {
    console.log("accessing webpage")
    console.log();
    await selenium.init();

    const login = new LoginPage(selenium);
    await login.init();
    await login.hackLoginPage();

    const user = new UserPage(selenium);
    await user.hack();
  } finally {
    // Close the browser
    await selenium.destroy()
  }
};

run().catch(console.error);