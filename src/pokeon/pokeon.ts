import { ApiReader, Transformer, Writer } from '../types'

export type PokeonOptions = {
  transformer: Transformer<object, string>
  reader: ApiReader
  writer: Writer<string>
}

class Pokeon {
  private options: PokeonOptions
  constructor(options: PokeonOptions) {
    this.options = options
  }
  public async execute() {
    const { transformer, reader, writer } = this.options

    const data = await reader.get()

    await writer.set('pokemon.yml', await transformer.transform(data))
  }
}

export default Pokeon
