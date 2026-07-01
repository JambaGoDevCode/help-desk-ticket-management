import { TeamModel } from "../mongoose/team.schema";
import { TeamRepository } from "../../../domain/repositories/team.repository";
import { Team } from "../../../domain/entities/team.entity";

export class TeamMongoRepository implements TeamRepository {

  async create(team: Team): Promise<Team> {

    const created = await TeamModel.create(team);

    return created as any;
  }

  async update(team: Team): Promise<Team> {

    const updated =
      await TeamModel.findByIdAndUpdate(
        team.id,
        team,
        { new: true }
      );

    return updated as any;
  }

  async findById(id: string) {

    return await TeamModel.findById(id)
      .populate("members")
      .populate("queues") as any;
  }

  async findAll() {

    return await TeamModel.find() as any;
  }

  async delete(id: string) {

    await TeamModel.findByIdAndDelete(id);
  }
}