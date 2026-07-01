export class RemoveMemberCommand {
    constructor(
        public readonly teamId: string,
        public readonly userId: string
    ) { }
}