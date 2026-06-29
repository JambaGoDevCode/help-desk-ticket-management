export class BusinessHours {
  constructor(
    public readonly start: string,
    public readonly end: string,
    public readonly timezone: string
  ) {}

  isWithinHours(date: Date): boolean {
    const hour = date.getHours();
    const startHour = parseInt(this.start.split(":")[0]);
    const endHour = parseInt(this.end.split(":")[0]);

    return hour >= startHour && hour <= endHour;
  }
}