import { TicketRepository } from "../../../domain/repositories/ticket.repository";
import { Ticket } from "../../../domain/entities/ticket.entity";
import { TicketModel } from "../models/ticket.model";
import { TicketPersistenceMapper } from "../mappers/ticket-persistence.mapper";

export class MongoTicketRepository
  implements TicketRepository {

  async create(ticket: Ticket): Promise<Ticket> {

    const document =
      TicketPersistenceMapper.toPersistence(
        ticket
      );

    const created =
      await TicketModel.create(document);

    return TicketPersistenceMapper.toDomain(
      created
    );
  }

  async update(ticket: Ticket): Promise<Ticket> {

    await TicketModel.findByIdAndUpdate(
      ticket.data.id,
      TicketPersistenceMapper.toPersistence(ticket)
    );

    return ticket;
  }

  async findById(id: string) {

    const document =
      await TicketModel.findById(id);

    if (!document) {
      return null;
    }

    return TicketPersistenceMapper.toDomain(
      document
    );
  }

  async findByNumber(ticketNumber: string) {

    const document =
      await TicketModel.findOne({
        ticketNumber,
      });

    if (!document) {
      return null;
    }

    return TicketPersistenceMapper.toDomain(
      document
    );
  }

  async findAll() {

    const documents =
      await TicketModel.find();

    return documents.map(
      TicketPersistenceMapper.toDomain
    );
  }

  async delete(id: string) {

    await TicketModel.findByIdAndDelete(id);
  }
}