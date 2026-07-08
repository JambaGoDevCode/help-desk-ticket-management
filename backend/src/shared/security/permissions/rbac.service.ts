import {
    Roles
}
    from "./roles.enum";


import {
    Permissions
}
    from "./permissions.enum";



export class RBACService {



    private rolePermissions =
        new Map<string, string[]>();



    constructor() {


        this.registerDefaults();


    }



    private registerDefaults() {


        this.rolePermissions.set(
            Roles.SUPER_ADMIN,
            Object.values(Permissions)
        );



        this.rolePermissions.set(
            Roles.TENANT_ADMIN,
            [
                Permissions.TICKET_CREATE,
                Permissions.TICKET_READ,
                Permissions.TICKET_UPDATE,
                Permissions.TICKET_DELETE,
                Permissions.TEAM_CREATE,
                Permissions.TEAM_MANAGE,
                Permissions.USER_MANAGE
            ]
        );



        this.rolePermissions.set(
            Roles.AGENT,
            [
                Permissions.TICKET_READ,
                Permissions.TICKET_UPDATE
            ]
        );



        this.rolePermissions.set(
            Roles.USER,
            [
                Permissions.TICKET_CREATE,
                Permissions.TICKET_READ
            ]
        );



    }



    hasPermission(
        roles: string[],
        permission: string
    ): boolean {


        return roles.some(
            role =>
                this.rolePermissions
                    .get(role)
                    ?.includes(permission)
        );


    }



    hasRole(
        roles: string[],
        role: string
    ) {


        return roles.includes(role);


    }



    getPermissions(
        roles: string[]
    ): string[] {


        return roles.flatMap(
            role =>
                this.rolePermissions.get(role) ?? []
        );


    }


}