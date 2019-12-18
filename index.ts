import chalk from "chalk";

const { log } = console;

export default {
  ok: (msg: any) => log(`${chalk.bgGreen.black.bold("  OK  ")} ${msg}`),
  info: (msg: any) => log(`${chalk.bgBlue.black.bold(" INFO ")} ${msg}`),
  warn: (msg: any) => log(`${chalk.bgYellow.black.bold(" WARN ")} ${msg}`),
  fail: (msg: any) => log(`${chalk.bgRed.black.bold(" FAIL ")} ${msg}`),
  skip: (msg: any) => log(`${chalk.bgGray(" SKIP ")} ${msg}`),
};
