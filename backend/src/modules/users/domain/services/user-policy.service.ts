import { User } from "../entities/user.entity";

export class UserPolicyService {
  canActivate(user: User): boolean {
    return user.status.value !== "ACTIVE";
  }

  canDeactivate(user: User): boolean {
    return user.status.value === "ACTIVE";
  }
}