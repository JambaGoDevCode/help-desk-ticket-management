import { User } from "../../domain/entities/user.entity";
import { UserResponseDTO } from "../dtos/user-response.dto";

export class UserMapper {
  static toDTO(user: User): UserResponseDTO {
    return {
      id: user.id.value,
      email: user.email.value,
      name: "", // vindo do Profile (se necessário ajustar depois)
      role: user.role.value,
      status: user.status.value,
      createdAt: user.createdAt
    };
  }
}