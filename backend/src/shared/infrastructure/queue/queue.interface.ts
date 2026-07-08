export interface Queue {


    add(
        name: string,
        payload: any
    ): Promise<void>;

}