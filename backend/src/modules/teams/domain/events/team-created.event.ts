export class TeamCreatedEvent {
  constructor(
    public readonly teamId: string,
    public readonly name: string
  ) {}
}