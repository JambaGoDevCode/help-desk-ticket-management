import { UserSession } from "../entities/user-session.entity";

export class UserSessionService {
  isSessionValid(session: UserSession): boolean {
    return session.isActive();
  }

  revokeSession(session: UserSession) {
    session.revoke();
  }
}