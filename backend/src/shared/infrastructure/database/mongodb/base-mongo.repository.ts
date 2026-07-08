import {
    Model,
    Document
} from "mongoose";


export abstract class BaseMongoRepository<
    TDomain,
    TDocument extends Document
> {


    constructor(
        protected readonly model:
            Model<TDocument>
    ) { }



    async findById(
        id: string
    ): Promise<TDomain | null> {


        const doc =
            await this.model.findById(id);


        if (!doc) {
            return null;
        }


        return this.toDomain(doc);

    }



    async findAll(
        filter: any = {}
    ): Promise<TDomain[]> {


        const docs =
            await this.model.find(filter);


        return docs.map(
            item =>
                this.toDomain(item)
        );

    }



    async delete(
        id: string
    ) {

        await this.model.findByIdAndDelete(id);

    }



    protected abstract toDomain(
        document: TDocument
    ): TDomain;



}