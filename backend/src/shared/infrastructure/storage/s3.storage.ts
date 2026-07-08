import {
    S3Client,
    PutObjectCommand,
    DeleteObjectCommand
}
    from "@aws-sdk/client-s3";

import { Storage } from "./storage.interface";


export class S3Storage
    implements Storage {


    constructor(
        private client: S3Client,
        private bucket: string
    ) { }



    async upload(
        file: Buffer,
        filename: string
    ) {


        await this.client.send(
            new PutObjectCommand({

                Bucket: this.bucket,

                Key: filename,

                Body: file

            })
        );


        return filename;

    }



    async delete(
        filename: string
    ) {

        await this.client.send(
            new DeleteObjectCommand({

                Bucket: this.bucket,

                Key: filename

            })
        );

    }



}