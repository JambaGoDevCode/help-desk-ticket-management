import jwt from "jsonwebtoken";

import {
    JwtPayload
}
    from "./jwt.payload";


import {
    JwtService
}
    from "./jwt.interface";



export class JwtServiceImpl
    implements JwtService {



    constructor(
        private readonly secret: string,

        private readonly expiresIn: string = "1d"

    ) { }



    sign(
        payload: JwtPayload
    ): string {


        return jwt.sign(
            payload,
            this.secret,
            {
                expiresIn: this.expiresIn
            }
        );


    }



    verify(
        token: string
    ): JwtPayload {


        return jwt.verify(
            token,
            this.secret
        ) as JwtPayload;


    }



    decode(
        token: string
    ): JwtPayload | null {


        const decoded =
            jwt.decode(token);



        if (!decoded)
            return null;



        return decoded as JwtPayload;


    }



}