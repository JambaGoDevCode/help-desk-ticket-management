export class MemberAddedEvent {
  constructor(
    public readonly teamId: string,
    public readonly userId: string
  ) {}
}