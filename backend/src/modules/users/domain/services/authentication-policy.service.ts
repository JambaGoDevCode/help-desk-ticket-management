import { User } from "../entities/user.entity";

export class UserAuthPolicyService {
  canLogin(user: User): boolean {
    return user.status.value === "ACTIVE";
  }
}