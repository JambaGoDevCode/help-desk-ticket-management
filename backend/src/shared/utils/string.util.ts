export class StringUtil {


    static capitalize(
        value: string
    ) {


        return value
            .charAt(0)
            .toUpperCase()
            +
            value.slice(1);


    }



    static truncate(
        value: string,
        size: number
    ) {


        if (value.length <= size)
            return value;


        return (
            value.substring(
                0,
                size
            )
            +
            "..."
        );


    }



    static isEmpty(
        value?: string
    ) {

        return !value ||
            value.trim().length === 0;

    }


}