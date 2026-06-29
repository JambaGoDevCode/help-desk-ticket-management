import { TeamStatus } from "../value-objects/team-status.vo";
import { TeamMember } from "./team-member.entity";
import { Queue } from "./queue.entity";

export class Team {
  constructor(
    public readonly id: string,
    public name: string,
    public departmentId: string,
    public status: TeamStatus,
    public capacity: number,
    public members: TeamMember[],
    public queues: Queue[],
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  addMember(member: TeamMember) {
    this.members.push(member);
    this.updatedAt = new Date();
  }

  removeMember(memberId: string) {
    this.members = this.members.filter(m => m.id !== memberId);
    this.updatedAt = new Date();
  }

  isOverCapacity(): boolean {
    return this.members.length > this.capacity;
  }
}