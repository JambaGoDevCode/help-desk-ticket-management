import { UserSession } from "../../domain/entities/user-session.entity";

export class UserSessionMapper {
  /**
   * Domain → DTO / Persistence View
   */
  static toDto(session: UserSession) {
    return {
      id: session.id.value,
      userId: session.userId.value,
      createdAt: session.createdAt,
      expiresAt: session.expiresAt,
      isActive: session.isActive,
    };
  }

  /**
   * Persistence → Domain
   */
  static toDomain(raw: any): UserSession {
    return new UserSession(
      raw._id,
      raw.userId,
      raw.refreshToken,
      raw.expiresAt,
      raw.isActive,
      raw.createdAt,
      raw.updatedAt
    );
  }

  /**
   * Domain → Persistence (Mongo)
   */
  static toPersistence(session: UserSession) {
    return {
      _id: session.id.value,
      userId: session.userId.value,
      refreshToken: session.refreshToken,
      expiresAt: session.expiresAt,
      isActive: session.isActive,
    };
  }
}