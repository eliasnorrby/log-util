const chalk = require("chalk");

module.exports = {
  ok: msg => console.log(`${chalk.bgGreen.black.bold("  OK  ")} ${msg}`),
  info: msg => console.log(`${chalk.bgBlue.black.bold(" INFO ")} ${msg}`),
  warn: msg => console.log(`${chalk.bgYellow.black.bold(" WARN ")} ${msg}`),
  fail: msg => console.log(`${chalk.bgRed.black.bold(" FAIL ")} ${msg}`),
  skip: msg => console.log(`${chalk.bgGray(" SKIP ")} ${msg}`),
};
