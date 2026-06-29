export class CreateUserValidator {
  static validate(data: any) {
    if (!data.email) throw new Error("Email is required");
    if (!data.password) throw new Error("Password is required");
    if (!data.name) throw new Error("Name is required");
  }
}