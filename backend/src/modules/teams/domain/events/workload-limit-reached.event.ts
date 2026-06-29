export class WorkloadLimitReachedEvent {
  constructor(
    public readonly userId: string,
    public readonly workload: number
  ) {}
}