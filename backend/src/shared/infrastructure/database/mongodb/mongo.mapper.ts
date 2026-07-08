export abstract class MongoMapper<
    Domain,
    Persistence
> {


    abstract toDomain(
        data: Persistence
    ): Domain;



    abstract toPersistence(
        data: Domain
    ): Persistence;


}