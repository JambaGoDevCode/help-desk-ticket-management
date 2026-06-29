import { TicketMessageRepository } from "../../../domain/repositories/ticket-message.repository";
import { TicketMessage } from "../../../domain/entities/ticket-message.entity";
import { TicketMessageModel } from "../models/ticket-message.model";

export class MongoTicketMessageRepository
  implements TicketMessageRepository {

  async create(
    message: TicketMessage
  ) {

    await TicketMessageModel.create(message);

    return message;
  }

  async findByTicket(
    ticketId: string
  ) {

    return TicketMessageModel.find({
      ticketId,
    });
  }
}