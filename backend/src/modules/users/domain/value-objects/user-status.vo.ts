export class UserStatus {
  private constructor(public readonly value: string) {}

  static active() {
    return new UserStatus("ACTIVE");
  }

  static inactive() {
    return new UserStatus("INACTIVE");
  }

  static suspended() {
    return new UserStatus("SUSPENDED");
  }

  isActive() {
    return this.value === "ACTIVE";
  }
}
