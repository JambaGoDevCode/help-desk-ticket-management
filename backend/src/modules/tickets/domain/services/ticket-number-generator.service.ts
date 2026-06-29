export class TicketNumberGeneratorService {

  generate(): string {

    const timestamp =
      Date.now();

    return `TKT-${timestamp}`;
  }
}