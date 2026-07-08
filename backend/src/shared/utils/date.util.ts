export class DateUtil {


    static now(): Date {

        return new Date();

    }



    static addHours(
        date: Date,
        hours: number
    ): Date {


        const result =
            new Date(date);


        result.setHours(
            result.getHours() + hours
        );


        return result;

    }



    static isExpired(
        date: Date
    ): boolean {


        return (
            new Date()
            >
            date
        );

    }



    static diffMinutes(
        start: Date,
        end: Date
    ): number {


        return Math.floor(
            (
                end.getTime()
                -
                start.getTime()
            )
            / 60000
        );


    }


}