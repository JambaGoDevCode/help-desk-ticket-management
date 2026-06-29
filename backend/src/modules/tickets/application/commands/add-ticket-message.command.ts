export interface AddTicketMessageCommand {
  ticketId: string;
  senderId: string;
  content: string;
}