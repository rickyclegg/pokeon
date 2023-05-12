import config from './config'
import fetch from 'node-fetch'
import { writeFileSync } from 'fs'
import YAML from 'yaml'

class Pokeon {
  public async execute() {
    const { POKEMON_API } = config()
    const data = await fetch(POKEMON_API)

    const pokemonJson = await data.json()

    writeFileSync('pokemon.yml', YAML.stringify(pokemonJson))
  }
}

export default Pokeon
