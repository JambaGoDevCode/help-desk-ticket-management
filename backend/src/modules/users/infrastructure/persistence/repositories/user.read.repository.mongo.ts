import { UserModel } from "../models/user.model";

export class UserReadRepositoryMongo {
  async findActiveUsers() {
    return await UserModel.find({ isActive: true });
  }

  async findAgents() {
    return await UserModel.find({ role: "AGENT" });
  }

  async countUsers() {
    return await UserModel.countDocuments();
  }
}