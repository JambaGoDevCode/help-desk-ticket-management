import Redis from "ioredis";
import { Cache } from "./cache.interface";


export class RedisCache
    implements Cache {


    constructor(
        private redis:
            Redis
    ) { }



    async set<T>(
        key: string,
        value: T,
        ttl?: number
    ) {


        const data =
            JSON.stringify(value);


        if (ttl) {

            await this.redis.set(
                key,
                data,
                "EX",
                ttl
            );

            return;

        }


        await this.redis.set(
            key,
            data
        );


    }



    async get<T>(
        key: string
    ) {


        const value =
            await this.redis.get(key);


        if (!value)
            return null;


        return JSON.parse(value)
as T;


    }



    async delete(
        key: string
    ) {

        await this.redis.del(key);

    }



    async clear() {

        await this.redis.flushall();

    }


}