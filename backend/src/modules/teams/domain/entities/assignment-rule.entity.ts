import { AssignmentStrategy } from "../value-objects/assignment-strategy.vo";

export class AssignmentRule {
  constructor(
    public readonly id: string,
    public teamId: string,
    public strategy: AssignmentStrategy,
    public workloadLimit: number
  ) {}

  canAssign(currentLoad: number): boolean {
    return currentLoad < this.workloadLimit;
  }
}