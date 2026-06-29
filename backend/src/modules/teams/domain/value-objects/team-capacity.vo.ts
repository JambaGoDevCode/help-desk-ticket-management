export class TeamCapacity {
  constructor(public readonly value: number) {
    if (value <= 0) {
      throw new Error("Capacity must be greater than zero");
    }
  }
}