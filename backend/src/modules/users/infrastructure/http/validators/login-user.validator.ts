export class LoginUserValidator {
  static validate(data: any) {
    if (!data.email) throw new Error("Email is required");
    if (!data.password) throw new Error("Password is required");
  }
}