export class UserProfileDto {
  id: string;
  name: string;
  email: string;
  phone?: string;

  role: "CLIENT" | "AGENT" | "ADMIN";
  status: "ACTIVE" | "INACTIVE";

  preferences?: {
    language?: string;
    theme?: "light" | "dark";
    notificationsEnabled?: boolean;
  };

  createdAt: Date;
  updatedAt: Date;
}