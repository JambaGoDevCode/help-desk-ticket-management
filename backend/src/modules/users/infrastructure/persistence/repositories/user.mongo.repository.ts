import { UserRepository } from "../../../domain/repositories/user.repository";
import { UserModel } from "../models/user.model";
import { UserPersistenceMapper } from "../mappers/user-session.persistence.mapper";
import { User } from "../../../domain/entities/user.entity";
import { Email } from "../../../domain/value-objects/email.vo";
import { TenantId } from "../../../domain/value-objects/tenant-id.vo";

export class UserRepositoryImpl implements UserRepository {
  async save(user: User): Promise<void> {
    const data = UserPersistenceMapper.toPersistence(user);
    await UserModel.create(data);
  }

  async create(user: User): Promise<User> {
    await this.save(user);
    return user;
  }

  async findById(id: string, tenantId: TenantId): Promise<User | null> {
    const doc = await UserModel.findOne({ _id: id, tenantId: tenantId });
    if (!doc) return null;
    return UserPersistenceMapper.toDomain(doc);
  }

  async findByEmail(email: string, tenantId: TenantId): Promise<User | null> {
    const doc = await UserModel.findOne({ email: email });
    if (!doc) return null;
    return UserPersistenceMapper.toDomain(doc);
  }

  async findAll(): Promise<User[]> {
    const docs = await UserModel.find();
    return docs.map(UserPersistenceMapper.toDomain);
  }

  async update(user: User): Promise<User> {
    await UserModel.updateOne(
      { _id: user.id.value },
      UserPersistenceMapper.toPersistence(user)
    );
    return user;
  }

  async delete(id: string): Promise<void> {
    await UserModel.deleteOne({ _id: id });
  }

  async existsByEmail(email: Email): Promise<boolean> {
    const count = await UserModel.countDocuments({ email: email.value });
    return count > 0;
  }
}