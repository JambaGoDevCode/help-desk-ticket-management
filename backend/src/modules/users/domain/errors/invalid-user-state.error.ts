export class InvalidUserStateError extends Error {
  constructor(message: string = "Invalid user state") {
    super(message);
  }
}