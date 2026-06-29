import { randomUUID } from "crypto";

export class UserId {
  constructor(public readonly value: string) {}

  static create(): UserId {
    return new UserId(randomUUID());
  }

  static from(value: string): UserId {
    if (!value) throw new Error("Invalid UserId");
    return new UserId(value);
  }
}