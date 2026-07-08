import bcrypt from "bcrypt";


import {
    HashService
}
    from "./hash.interface";



export class BcryptHashService
    implements HashService {



    constructor(
        private readonly rounds: number = 12
    ) { }



    async hash(
        value: string
    ): Promise<string> {


        return bcrypt.hash(
            value,
            this.rounds
        );


    }



    async compare(
        value: string,
        hash: string
    ): Promise<boolean> {


        return bcrypt.compare(
            value,
            hash
        );


    }



}