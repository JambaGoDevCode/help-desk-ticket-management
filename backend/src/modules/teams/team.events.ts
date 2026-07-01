import { teamDependencies } from "./team.dependencies";

export function initializeTeamEvents() {

    const { eventBus } = teamDependencies.services;

    /*
    |--------------------------------------------------------------------------
    | TEAM EVENTS
    |--------------------------------------------------------------------------
    */

    eventBus.on("team.created", (event) => {
        console.log("[TEAM CREATED EVENT]", event);
    });

    eventBus.on("team.updated", (event) => {
        console.log("[TEAM UPDATED EVENT]", event);
    });

    eventBus.on("member.added", (event) => {
        console.log("[MEMBER ADDED EVENT]", event);
    });

    eventBus.on("member.removed", (event) => {
        console.log("[MEMBER REMOVED EVENT]", event);
    });

    eventBus.on("queue.assigned", (event) => {
        console.log("[QUEUE ASSIGNED EVENT]", event);
    });

    eventBus.on("team.capacity.exceeded", (event) => {
        console.log("[TEAM CAPACITY EXCEEDED]", event);
    });

    eventBus.on("workload.limit.reached", (event) => {
        console.log("[WORKLOAD LIMIT REACHED]", event);
    });
}