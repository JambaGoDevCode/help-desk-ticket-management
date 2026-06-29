export class EmailAlreadyUsedError extends Error {
  constructor() {
    super("Email already in use");
  }
}