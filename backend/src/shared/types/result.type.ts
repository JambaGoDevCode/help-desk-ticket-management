export type ResultType<T> = {


    success: boolean;


    data?: T;


    error?: {

        message: string;

        code?: string;

    };


};