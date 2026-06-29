import { Profile } from "../../domain/entities/profile.entity";

export class ProfileMapper {
  static toPersistence(profile: Profile) {
    return {
      userId: profile.userId.value,
      name: profile.name,
      avatarUrl: profile.avatarUrl,
      phone: profile.phone?.value
    };
  }
}