import { Team } from "../entities/team.entity";

export interface TeamRepository {

  create(team: Team): Promise<Team>;

  update(team: Team): Promise<Team>;

  findById(id: string): Promise<Team | null>;

  findAll(): Promise<Team[]>;

  delete(id: string): Promise<void>;
}