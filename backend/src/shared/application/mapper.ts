export interface Mapper<
    Domain,
    Persistence,
    Response = Persistence
> {

    toDomain(data: Persistence): Domain;

    toPersistence(domain: Domain): Persistence;

    toResponse(domain: Domain): Response;

}