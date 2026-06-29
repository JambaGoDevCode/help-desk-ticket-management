import { TicketActivityRepository } from "../../domain/repositories/ticket-activity.repository";

export class GetTicketActivitiesUseCase {
  constructor(
    private readonly repository: TicketActivityRepository
  ) {}

  async execute(ticketId: string) {
    return this.repository.findByTicket(
      ticketId
    );
  }
}