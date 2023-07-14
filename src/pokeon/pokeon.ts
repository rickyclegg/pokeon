import { Pokemon, PokemonItemApiRes, PokemonNamesApiRes, Reader, Transformer, Writer } from '../types'

export type PokeonOptions = {
  namesTransformer: Transformer<object, string>
  pokemonTransformer: Transformer<object, string>
  reader: Reader
  writer: Writer<string>
}

class Pokeon {
  private options: PokeonOptions
  constructor(options: PokeonOptions) {
    this.options = options
  }
  public async execute() {
    const { namesTransformer, reader, writer } = this.options

    const data = await reader.get<PokemonNamesApiRes>()

    await writer.set(await namesTransformer.transform(data.results))

    for (let i = 0; i < data.results.length; i++) {
      await this.writePokemonFile(data.results[i].name)
    }
  }

  private async writePokemonFile(name: Pokemon['name']) {
    const { reader, writer, pokemonTransformer } = this.options
    const pokemonData = await reader.get<PokemonItemApiRes>(`/${name}`)

    const yml = await pokemonTransformer.transform(pokemonData)
    await writer.set(yml, `/${name}.yml`)
  }
}

export default Pokeon
