import { TicketMessage } from "../../domain/entities/ticket-message.entity";
import { TicketMessageRepository } from "../../domain/repositories/ticket-message.repository";
import { AddTicketMessageCommand } from "../commands/add-ticket-message.command";

export class AddTicketMessageUseCase {
  constructor(
    private readonly repository: TicketMessageRepository
  ) {}

  async execute(command: AddTicketMessageCommand) {

    const message = new TicketMessage(
      crypto.randomUUID(),
      command.ticketId,
      command.senderId,
      command.content,
      new Date()
    );

    return this.repository.create(message);
  }
}