import { Cache } from "./cache.interface";


export class MemoryCache
    implements Cache {


    private store =
        new Map<string, any>();



    async set<T>(
        key: string,
        value: T
    ) {

        this.store.set(
            key,
            value
        );

    }



    async get<T>(
        key: string
    ) {

        return (
            this.store.get(key)
            ?? null
        ) as T | null;

    }



    async delete(
        key: string
    ) {

        this.store.delete(key);

    }



    async clear() {

        this.store.clear();

    }


}