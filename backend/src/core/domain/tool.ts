export class Tool {
  name: string
  logo?: string
  description?: string

  constructor(name: string, logo?: string, description?: string) {
    this.name = name
    this.logo = logo
    this.description = description
  }
}
