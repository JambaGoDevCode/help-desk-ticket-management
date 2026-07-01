export class TeamPresenter {

    static toHTTP(team: any) {

        return {
            id: team.id,
            name: team.name,
            capacity: team.capacity,
            members: team.members?.length || 0,
            queues: team.queues?.length || 0
        };
    }
}