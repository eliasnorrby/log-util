import chalk from "chalk";

const { log: lg } = console;

export const log = {
  ok: (msg: any) => lg(`${chalk.bgGreen.black.bold("  OK  ")} ${msg}`),
  info: (msg: any) => lg(`${chalk.bgBlue.black.bold(" INFO ")} ${msg}`),
  warn: (msg: any) => lg(`${chalk.bgYellow.black.bold(" WARN ")} ${msg}`),
  fail: (msg: any) => lg(`${chalk.bgRed.black.bold(" FAIL ")} ${msg}`),
  skip: (msg: any) => lg(`${chalk.bgGray(" SKIP ")} ${msg}`),
};
