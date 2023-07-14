import { PokemonItemApiRes, PokemonNamesApiRes, Reader, Transformer, Writer } from '../types'

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
    const { namesTransformer, reader, writer, pokemonTransformer } = this.options

    const data = await reader.get<PokemonNamesApiRes>()

    await writer.set(await namesTransformer.transform(data.results))

    const pokemonData = await reader.get<PokemonItemApiRes>(`/${data.results[0].name}`)

    const yml = await pokemonTransformer.transform(pokemonData)
    await writer.set(yml, `/${data.results[0].name}.yml`)
  }
}

export default Pokeon
