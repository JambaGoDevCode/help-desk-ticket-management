export class TicketTags {
  constructor(
    private readonly tags: string[]
  ) {}

  getValues() {
    return this.tags;
  }
}