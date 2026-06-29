import * as bcrypt from "bcrypt";

export class Password {
  private constructor(public readonly hash: string) {}

  static async create(plain: string) {
    const hash = await bcrypt.hash(plain, 10);
    return new Password(hash);
  }

  static fromHash(hash: string) {
    return new Password(hash);
  }

  async compare(plain: string): Promise<boolean> {
    return bcrypt.compare(plain, this.hash);
  }
}