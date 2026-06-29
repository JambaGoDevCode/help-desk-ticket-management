export class WorkloadLimit {
  constructor(public readonly value: number) {
    if (value < 1) throw new Error("Invalid workload limit");
  }
}