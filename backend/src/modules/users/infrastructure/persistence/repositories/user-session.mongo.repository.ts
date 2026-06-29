import { UserSessionModel } from "../models/user-session.model";

export class UserSessionMongoRepository {
  async create(data: any) {
    return await UserSessionModel.create(data);
  }

  async findByToken(token: string) {
    return await UserSessionModel.findOne({ refreshToken: token });
  }

  async deleteByUser(userId: string) {
    return await UserSessionModel.deleteMany({ userId });
  }
}