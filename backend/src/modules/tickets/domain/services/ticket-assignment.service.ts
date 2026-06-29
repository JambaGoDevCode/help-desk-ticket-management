export class TicketAssignmentService {

  autoAssign(
    availableAgents: string[]
  ): string | null {

    if (!availableAgents.length) {
      return null;
    }

    return availableAgents[0];
  }
}