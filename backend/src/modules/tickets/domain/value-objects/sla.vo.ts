export class SLA {
  constructor(
    private readonly responseMinutes: number,
    private readonly resolutionMinutes: number
  ) {}

  getResponseMinutes() {
    return this.responseMinutes;
  }

  getResolutionMinutes() {
    return this.resolutionMinutes;
  }

  isBreached(createdAt: Date): boolean {
    const now = Date.now();

    const diff =
      now - createdAt.getTime();

    return diff >
      this.resolutionMinutes * 60 * 1000;
  }
}