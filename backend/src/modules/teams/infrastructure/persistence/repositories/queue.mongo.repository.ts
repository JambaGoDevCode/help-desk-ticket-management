import { QueueModel } from "../mongoose/queue.schema";
import { QueueRepository } from "../../../domain/repositories/queue.repository";

export class QueueMongoRepository implements QueueRepository {

  async create(queue: any) {
    return await QueueModel.create(queue);
  }

  async update(queue: any) {
    return await QueueModel.findByIdAndUpdate(
      queue.id,
      queue,
      { new: true }
    );
  }

  async findById(id: string) {
    return await QueueModel.findById(id);
  }

  async findByTeam(teamId: string) {
    return await QueueModel.find({ teamId });
  }

  async delete(id: string) {
    await QueueModel.findByIdAndDelete(id);
  }
}