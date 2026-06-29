import { UserPreference } from "../../domain/entities/user-preference.entity";

export class PreferenceMapper {
  static toPersistence(pref: UserPreference) {
    return {
      userId: pref.userId.value,
      language: pref.language,
      timezone: pref.timezone,
      emailNotifications: pref.emailNotifications,
      pushNotifications: pref.pushNotifications
    };
  }
}