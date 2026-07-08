export abstract class BaseException
    extends Error {


    public readonly statusCode: number;


    public readonly timestamp: Date;



    constructor(
        message: string,
        statusCode: number
    ) {

        super(message);


        this.statusCode =
            statusCode;


        this.timestamp =
            new Date();


        this.name =
            this.constructor.name;

    }


}