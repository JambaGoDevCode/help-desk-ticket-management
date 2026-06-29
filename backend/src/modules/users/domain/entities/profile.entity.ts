import { UserId } from "../value-objects/user-id.vo";
import { Phone } from "../value-objects/phone.vo";

export class Profile {
  constructor(
    public readonly userId: UserId,
    public name: string,
    public avatarUrl?: string,
    public phone?: Phone
  ) {}

  updateName(name: string) {
    this.name = name;
  }

  updatePhone(phone: Phone) {
    this.phone = phone;
  }

  updateAvatar(url: string) {
    this.avatarUrl = url;
  }
}