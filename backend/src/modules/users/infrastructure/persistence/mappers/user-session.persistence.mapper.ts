import { User } from "../../../domain/entities/user.entity";
import { UserModel } from "../models/user.model";

export class UserPersistenceMapper {
  static toDomain(doc: any): User {
    return new User(
      { value: doc._id } as any,
      { value: doc.email } as any,
      { value: doc.role } as any,
      { value: doc.status } as any,
      doc.passwordHash,
      doc.createdAt,
      doc.updatedAt
    );
  }

  static toPersistence(user: User) {
    return {
      _id: user.id.value,
      email: user.email.value,
      role: user.role.value,
      status: user.status.value,
      passwordHash: user.passwordHash
    };
  }
}