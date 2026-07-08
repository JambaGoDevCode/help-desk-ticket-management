import pino from "pino";
import { Logger } from "./logger.interface";


export class PinoLogger
    implements Logger {


    private logger =
        pino();



    info(
        message: string,
        meta?: unknown
    ) {

        this.logger.info(
            meta,
            message
        );

    }



    error(
        message: string,
        error?: unknown
    ) {

        this.logger.error(
            error,
            message
        );

    }



    warn(
        message: string,
        meta?: unknown
    ) {

        this.logger.warn(
            meta,
            message
        );

    }



    debug(
        message: string,
        meta?: unknown
    ) {

        this.logger.debug(
            meta,
            message
        );

    }


}