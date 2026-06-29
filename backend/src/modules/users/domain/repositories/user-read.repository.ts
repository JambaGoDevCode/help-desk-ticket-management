import { TenantId } from "../value-objects/tenant-id.vo";

export interface UserReadRepository {
  countUsers(tenantId: TenantId): Promise<number>;

  countActiveUsers(tenantId: TenantId): Promise<number>;

  countAgents(tenantId: TenantId): Promise<number>;

  listActiveUsers(tenantId: TenantId): Promise<any[]>;

  listUsersByRole(role: string, tenantId: TenantId): Promise<any[]>;
}