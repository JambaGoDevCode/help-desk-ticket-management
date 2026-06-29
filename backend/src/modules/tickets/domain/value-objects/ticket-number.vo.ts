export class TicketNumber {
  constructor(
    private readonly value: string
  ) {}

  getValue() {
    return this.value;
  }
}