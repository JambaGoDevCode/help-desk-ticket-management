import {
    randomUUID
}
    from "crypto";


export class IdUtil {


    static generate(): string {

        return randomUUID();

    }



    static generateNumber(
        prefix: string
    ): string {


        return `${prefix}-${Date.now()}`;

    }


}