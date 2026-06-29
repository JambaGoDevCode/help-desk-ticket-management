import { TicketMessageRepository } from "../../domain/repositories/ticket-message.repository";

export class GetTicketMessagesUseCase {
  constructor(
    private readonly repository: TicketMessageRepository
  ) {}

  async execute(ticketId: string) {
    return this.repository.findByTicket(
      ticketId
    );
  }
}