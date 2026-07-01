import { TeamMongoRepository } from "./infrastructure/persistence/repositories/team.mongo.repository";
import { QueueMongoRepository } from "./infrastructure/persistence/repositories/queue.mongo.repository";
import { DepartmentMongoRepository } from "./infrastructure/persistence/repositories/department.mongo.repository";

import { EventBusService } from "./infrastructure/services/event-bus.service";
import { AssignmentEngineService } from "./infrastructure/services/assignment-engine.service";
import { LoadBalancerAdapter } from "./infrastructure/services/load-balancer.adapter";

import { AutoAssignmentService } from "./domain/services/auto-assignment.service";
import { WorkloadBalancerService } from "./domain/services/workload-balancer.service";
import { QueuePolicyService } from "./domain/services/queue-policy.service";
import { TeamCapacityService } from "./domain/services/team-capacity.service";
import { AssignmentPriorityService } from "./domain/services/assignment-priority.service";
import { RoutingStrategyService } from "./domain/services/routing-strategy.service";

export const teamDependencies = {

    repositories: {
        teamRepository: new TeamMongoRepository(),
        queueRepository: new QueueMongoRepository(),
        departmentRepository: new DepartmentMongoRepository(),
    },

    services: {
        eventBus: new EventBusService(),
        assignmentEngine: new AssignmentEngineService(),
        loadBalancer: new LoadBalancerAdapter(),

        autoAssignment: new AutoAssignmentService(),
        workloadBalancer: new WorkloadBalancerService(),
        queuePolicy: new QueuePolicyService(),
        teamCapacity: new TeamCapacityService(),
        assignmentPriority: new AssignmentPriorityService(),
        routingStrategy: new RoutingStrategyService(),
    }
};