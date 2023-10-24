const os = require("os");
const figlet = require("figlet");
const chalk = require("chalk");

const boutpc = () => {
  console.log(
    chalk.blueBright.bold(
      figlet.textSync("boutPC", { horizontalLayout: "default" })
    )
  );
  console.log(chalk.yellowBright("-------------------------------------"));
  console.log(chalk.cyanBright("boutPC - Know Your PC"));
  console.log(chalk.yellowBright("-------------------------------------"));
  console.log(chalk.green("Hostname - "), os.hostname());
  console.log(chalk.green("Username - "), os.userInfo().username);
  console.log(chalk.green("Home directory - "), os.userInfo().homedir);
  console.log(chalk.green("Shell - "), os.userInfo().shell);
  console.log(chalk.green("Architecture - "), os.arch());
  console.log(chalk.green("Platform - "), os.platform());
  console.log(chalk.green("OS - "), os.type());
  console.log(chalk.green("Release - "), os.release());

  let tmem = Math.floor(os.totalmem() / (1024 * 1024));
  console.log(chalk.green("Total Memory - "), tmem, "MBs");
  let fmem = Math.floor(os.freemem() / (1024 * 1024));
  console.log(chalk.green("Free Memory - "), fmem, "MBs");

  let uptime = os.uptime();
  let uptimeString = formatUptime(uptime);
  console.log(chalk.green("Uptime - "), uptimeString);
  console.log(chalk.yellowBright("-------------------------------------"));
};

const formatUptime = (uptime) => {
  let seconds = Math.floor(uptime % 60);
  let minutes = Math.floor((uptime % 3600) / 60);
  let hours = Math.floor(uptime / 3600);

  return hours + " hrs " + minutes + " min " + seconds + " sec";
};

module.exports = boutpc;
