import { JwtPayload } from "./jwt.payload";


export interface JwtService {


    sign(
        payload: JwtPayload
    ): string;



    verify(
        token: string
    ): JwtPayload;



    decode(
        token: string
    ): JwtPayload | null;


}