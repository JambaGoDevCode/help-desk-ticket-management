import { BaseException }
    from "./base.exception";


export class InfrastructureException
    extends BaseException {


    constructor(
        message: string
    ) {

        super(
            message,
            500
        );

    }


}