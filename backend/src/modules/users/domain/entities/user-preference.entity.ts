import { UserId } from "../value-objects/user-id.vo";

export class UserPreference {
  constructor(
    public readonly userId: UserId,
    public language: string = "pt",
    public timezone: string = "Africa/Luanda",
    public emailNotifications: boolean = true,
    public pushNotifications: boolean = true
  ) {}

  updateLanguage(lang: string) {
    this.language = lang;
  }

  toggleEmailNotifications(value: boolean) {
    this.emailNotifications = value;
  }

  togglePushNotifications(value: boolean) {
    this.pushNotifications = value;
  }
}