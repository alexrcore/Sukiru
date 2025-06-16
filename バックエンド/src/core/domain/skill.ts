export class Skill {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  get getName(): string {
    return this.name
  }
}
