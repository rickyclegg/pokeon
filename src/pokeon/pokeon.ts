import fetch from 'node-fetch'
import { writeFileSync } from 'fs'
import YAML from 'yaml'

export type PokeonOptions = {
  api: string
}

class Pokeon {
  private options: PokeonOptions
  constructor(options: PokeonOptions) {
    this.options = options
  }
  public async execute() {
    const data = await fetch(this.options.api)

    const pokemonJson = await data.json()

    writeFileSync('pokemon.yml', YAML.stringify(pokemonJson))
  }
}

export default Pokeon
