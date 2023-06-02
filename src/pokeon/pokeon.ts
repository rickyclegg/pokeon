import { writeFileSync } from 'fs'
import { ApiReader, Transformer } from '../types'

export type PokeonOptions = {
  transformer: Transformer<object, string>
  reader: ApiReader
}

class Pokeon {
  private options: PokeonOptions
  constructor(options: PokeonOptions) {
    this.options = options
  }
  public async execute() {
    const { transformer, reader } = this.options

    const data = await reader.get()

    writeFileSync('pokemon.yml', await transformer.transform(data))
  }
}

export default Pokeon
