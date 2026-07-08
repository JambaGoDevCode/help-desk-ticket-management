import {
    Request,
    Response,
    NextFunction
}
    from "express";



export class RolesGuard {



    constructor(
        private allowedRoles: string[]
    ) { }



    handle() {


        return (
            req: Request,
            res: Response,
            next: NextFunction
        ) => {


            const user =
                (req as any).user;



            if (!user) {

                return res
                    .status(401)
                    .json({
                        message: "Unauthorized"
                    });

            }



            const allowed =
                user.roles.some(
                    (role: string) =>
                        this.allowedRoles.includes(role)
                );



            if (!allowed) {

                return res
                    .status(403)
                    .json({
                        message: "Forbidden"
                    });

            }



            next();



        };


    }


}