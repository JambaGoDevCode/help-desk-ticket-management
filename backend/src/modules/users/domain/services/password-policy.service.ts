export class PasswordPolicyService {
  validate(password: string): void {
    if (password.length < 8) {
      throw new Error("Password too weak");
    }
  }
}