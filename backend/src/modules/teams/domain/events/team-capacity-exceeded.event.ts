export class TeamCapacityExceededEvent {
  constructor(
    public readonly teamId: string,
    public readonly capacity: number
  ) {}
}