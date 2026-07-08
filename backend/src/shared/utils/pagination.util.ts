export class PaginationUtil {


    static calculate(
        page: number,
        limit: number,
        total: number
    ) {


        const totalPages =
            Math.ceil(
                total / limit
            );



        return {


            page,

            limit,

            total,

            totalPages,


            hasNext:
                page < totalPages,


            hasPrevious:
                page > 1


        };


    }



    static normalize(
        page?: number,
        limit?: number
    ) {


        return {


            page:
                page && page > 0
                    ?
                    page
                    :
                    1,


            limit:
                limit && limit > 0
                    ?
                    limit
                    :
                    20


        };


    }


}