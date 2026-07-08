export class RepositoryFactory {


private repositories =
new Map<string,unknown>();



register(
    name:string,
    repository:any
){

    this.repositories.set(
        name,
        repository
    );

}



get<T>(
    name:string
):T{


const repo =
this.repositories.get(name);


if(!repo){

throw new Error(
`Repository ${name} not found`
);

}


return repo as T;

}



}