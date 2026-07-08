export interface Storage {


    upload(
        file: Buffer,
        filename: string
    ): Promise<string>;



    delete(
        filename: string
    ): Promise<void>;


}