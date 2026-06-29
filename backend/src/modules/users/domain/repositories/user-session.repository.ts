import { UserSession } from "../entities/user-session.entity";
import { TenantId } from "../value-objects/tenant-id.vo";

export interface UserSessionRepository {
  create(session: UserSession): Promise<UserSession>;

  findById(id: string, tenantId: TenantId): Promise<UserSession | null>;

  findByUserId(userId: string, tenantId: TenantId): Promise<UserSession[]>;

  findByRefreshToken(token: string, tenantId: TenantId): Promise<UserSession | null>;

  delete(id: string, tenantId: TenantId): Promise<void>;

  deleteByUserId(userId: string, tenantId: TenantId): Promise<void>;
}