import fs from "fs/promises";
import path from "path";
import { Storage } from "./storage.interface";


export class LocalStorage
    implements Storage {


    constructor(
        private folder: string
    ) { }



    async upload(
        file: Buffer,
        filename: string
    ) {

        const location =
            path.join(
                this.folder,
                filename
            );


        await fs.writeFile(
            location,
            file
        );


        return location;

    }



    async delete(
        filename: string
    ) {

        await fs.unlink(
            path.join(
                this.folder,
                filename
            )
        );

    }


}