export class CreateTeamCommand {
    constructor(
        public readonly name: string,
        public readonly departmentId: string,
        public readonly capacity: number
    ) { }
}