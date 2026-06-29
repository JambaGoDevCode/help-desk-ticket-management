export class MemberRemovedEvent {
  constructor(
    public readonly teamId: string,
    public readonly userId: string
  ) {}
}