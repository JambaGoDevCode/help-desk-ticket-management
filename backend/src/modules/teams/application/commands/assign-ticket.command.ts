export class AssignTicketCommand {
    constructor(
        public readonly ticketId: string,
        public readonly teamId: string
    ) { }
}