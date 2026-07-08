import { randomUUID } from "crypto";

export class EntityId {

  private readonly _value: string;


  constructor(value?: string) {

    this._value = value ?? randomUUID();

    this.validate();
  }


  get value(): string {
    return this._value;
  }


  private validate(): void {

    if (!this._value || this._value.trim().length === 0) {

      throw new Error(
        "Entity id cannot be empty"
      );
    }
  }


  equals(id?: EntityId): boolean {

    if (!id) {
      return false;
    }

    return this._value === id.value;
  }


  toString(): string {

    return this._value;
  }
}