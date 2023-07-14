import { PokemonNamesApiRes, Reader, Transformer, Writer } from '../types'

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
  }
}

export default Pokeon
