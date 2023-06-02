import fetch from 'node-fetch'
import { writeFileSync } from 'fs'
import { Transformer } from '../types'

export type PokeonOptions = {
  api: string
  transformer: Transformer<object, string>
}

class Pokeon {
  private options: PokeonOptions
  constructor(options: PokeonOptions) {
    this.options = options
  }
  public async execute() {
    const data = await fetch(this.options.api)

    const pokemonJson = await data.json()

    writeFileSync('pokemon.yml', await this.options.transformer.transform(pokemonJson))
  }
}

export default Pokeon
