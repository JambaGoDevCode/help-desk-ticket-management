import { UserRepository } from "../../../domain/repositories/user.repository";
import { UserModel } from "../models/user.model";
import { UserPersistenceMapper } from "../mappers/user.persistence.mapper";
import { User } from "../../../domain/entities/user.entity";
import { UserId } from "../../../domain/value-objects/user-id.vo";
import { Email } from "../../../domain/value-objects/email.vo";

export class UserRepositoryImpl implements UserRepository {
  async save(user: User): Promise<void> {
    const data = UserPersistenceMapper.toPersistence(user);
    await UserModel.create(data);
  }

  async findById(id: UserId): Promise<User | null> {
    const doc = await UserModel.findById(id.value);
    if (!doc) return null;
    return UserPersistenceMapper.toDomain(doc);
  }

  async findByEmail(email: Email): Promise<User | null> {
    const doc = await UserModel.findOne({ email: email.value });
    if (!doc) return null;
    return UserPersistenceMapper.toDomain(doc);
  }

  async findAll(): Promise<User[]> {
    const docs = await UserModel.find();
    return docs.map(UserPersistenceMapper.toDomain);
  }

  async update(user: User): Promise<void> {
    await UserModel.updateOne(
      { _id: user.id.value },
      UserPersistenceMapper.toPersistence(user)
    );
  }

  async delete(id: UserId): Promise<void> {
    await UserModel.deleteOne({ _id: id.value });
  }

  async existsByEmail(email: Email): Promise<boolean> {
    const count = await UserModel.countDocuments({ email: email.value });
    return count > 0;
  }
}