import { AssignmentRule } from "../entities/assignment-rule.entity";

export interface AssignmentRuleRepository {

  create(rule: AssignmentRule): Promise<AssignmentRule>;

  update(rule: AssignmentRule): Promise<AssignmentRule>;

  findByTeam(teamId: string): Promise<AssignmentRule | null>;

  delete(id: string): Promise<void>;
}