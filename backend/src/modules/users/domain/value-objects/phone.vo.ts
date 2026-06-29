export class Phone {
  constructor(public readonly value: string) {
    if (!this.isValid(value)) {
      throw new Error("Invalid phone number");
    }
  }

  private isValid(phone: string): boolean {
    return /^\+?[0-9]{9,15}$/.test(phone);
  }
}