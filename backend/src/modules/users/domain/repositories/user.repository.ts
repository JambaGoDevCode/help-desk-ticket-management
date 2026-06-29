import { User } from "../entities/user.entity";
import { TenantId } from "../value-objects/tenant-id.vo";

export interface UserRepository {
  create(user: User): Promise<User>;

  findById(id: string, tenantId: TenantId): Promise<User | null>;

  findByEmail(email: string, tenantId: TenantId): Promise<User | null>;

  update(user: User): Promise<User>;

  delete(id: string, tenantId: TenantId): Promise<void>;

  list(tenantId: TenantId): Promise<User[]>;
}