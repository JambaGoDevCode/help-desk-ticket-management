import { Ticket } from "../entities/ticket.entity";

export interface TicketRepository {

  create(
    ticket: Ticket
  ): Promise<Ticket>;

  update(
    ticket: Ticket
  ): Promise<Ticket>;

  findById(
    id: string
  ): Promise<Ticket | null>;

  findByNumber(
    ticketNumber: string
  ): Promise<Ticket | null>;

  findAll(): Promise<Ticket[]>;

  delete(
    id: string
  ): Promise<void>;
}