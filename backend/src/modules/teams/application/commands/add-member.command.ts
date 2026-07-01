export class AddMemberCommand {
    constructor(
        public readonly teamId: string,
        public readonly userId: string,
        public readonly role: string
    ) { }
}