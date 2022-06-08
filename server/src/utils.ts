import { hash, compare } from "bcrypt";

async function encryptPassword(password: string) {
  return hash(password, 10);
}

async function isValidPassword(passwordText: string, passwordhash: string) {
  return compare(passwordText, passwordhash);
}

export { encryptPassword, isValidPassword };
