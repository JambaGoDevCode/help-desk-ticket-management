import mongoose from "mongoose";


export class MongoConnection {


    private static instance: MongoConnection;


    private constructor() { }



    static getInstance() {

        if (!MongoConnection.instance) {

            MongoConnection.instance =
                new MongoConnection();

        }

        return MongoConnection.instance;

    }



    async connect(
        uri: string
    ): Promise<void> {


        if (mongoose.connection.readyState === 1) {
            return;
        }


        await mongoose.connect(uri);


        console.log(
            "MongoDB connected"
        );

    }



    async disconnect() {

        await mongoose.disconnect();

    }


}