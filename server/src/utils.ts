import { hash, compare } from "bcrypt";

async function encryptPassword(password: string) {
  return hash(password, 10);
}

async function isValidPassword(passwordText: string, passwordhash: string) {
  return compare(passwordText, passwordhash);
}

function addDays(date: Date, days: number) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

export { encryptPassword, isValidPassword, addDays };
