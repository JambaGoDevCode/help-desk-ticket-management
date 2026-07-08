import { BaseEntity } from "./base-entity";


export interface Repository<T extends BaseEntity<any>> {


   create(
      entity: T
   ): Promise<T>;



   update(
      entity: T
   ): Promise<T>;



   findById(
      id: string
   ): Promise<T | null>;



   findAll(
      filters?: unknown
   ): Promise<T[]>;



   delete(
      id: string
   ): Promise<void>;



   exists(
      id: string
   ): Promise<boolean>;

}
