import { TicketActivityRepository } from "../../../domain/repositories/ticket-activity.repository";
import { TicketActivityModel } from "../models/ticket-activity.model";

export class MongoTicketActivityRepository
  implements TicketActivityRepository {

  async create(activity: any) {

    return TicketActivityModel.create(
      activity
    );
  }

  async findByTicket(
    ticketId: string
  ) {

    return TicketActivityModel.find({
      ticketId,
    });
  }
}