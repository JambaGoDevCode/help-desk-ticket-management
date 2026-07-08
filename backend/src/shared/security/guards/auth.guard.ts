import { Request, Response, NextFunction }
    from "express";


import {
    JwtService
}
    from "../jwt/jwt.service";



export class AuthGuard {



    constructor(
        private jwtService: JwtService
    ) { }



    handle() {

        return (
            req: Request,
            res: Response,
            next: NextFunction
        ) => {


            const header =
                req.headers.authorization;



            if (!header) {

                return res
                    .status(401)
                    .json({
                        message: "Unauthorized"
                    });

            }



            const token =
                header.replace(
                    "Bearer ",
                    ""
                );



            try {


                const user =
                    this.jwtService.verify(token);



                (req as any).user =
                    user;



                next();



            }
            catch {


                return res
                    .status(401)
                    .json({
                        message: "Invalid token"
                    });


            }



        };


    }



}