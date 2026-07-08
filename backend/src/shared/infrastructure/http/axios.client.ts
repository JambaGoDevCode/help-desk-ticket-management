import axios, { AxiosInstance }
    from "axios";

import { HttpClient }
    from "./http-client.interface";


export class AxiosClient
    implements HttpClient {


    private client: AxiosInstance;



    constructor() {

        this.client =
            axios.create();

    }



    async get<T>(
        url: string
    ) {

        const response =
            await this.client.get<T>(url);


        return response.data;

    }



    async post<T>(
        url: string,
        data: any
    ) {

        const response =
            await this.client.post<T>(
                url,
                data
            );


        return response.data;

    }



}