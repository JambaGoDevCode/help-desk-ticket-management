import { EntityId } from "./entity-id";


export abstract class BaseEntity<T> {


  protected readonly _id: EntityId;

  protected props: T;


  protected createdAt: Date;

  protected updatedAt: Date;



  constructor(
    props: T,
    id?: EntityId
  ) {

    this._id = id ?? new EntityId();

    this.props = props;

    this.createdAt = new Date();

    this.updatedAt = new Date();
  }



  get id(): string {

    return this._id.value;
  }



  get entityId(): EntityId {

    return this._id;
  }



  getCreatedAt(): Date {

    return this.createdAt;
  }



  getUpdatedAt(): Date {

    return this.updatedAt;
  }



  protected touch(): void {

    this.updatedAt = new Date();
  }



  equals(entity?: BaseEntity<T>): boolean {


    if (!entity) {
      return false;
    }


    return this._id.equals(
      entity.entityId
    );
  }

}