export class UserAdapter {

    async getUser(userId: string) {

        return {
            id: userId,
            name: "Mock User",
            role: "AGENT"
        };
    }
}