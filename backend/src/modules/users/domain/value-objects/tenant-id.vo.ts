export class TenantId {
  private readonly value: string;

  constructor(value: string) {
    if (!value || value.trim().length < 3) {
      throw new Error("Invalid TenantId");
    }

    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  equals(other: TenantId): boolean {
    return this.value === other.getValue();
  }
}