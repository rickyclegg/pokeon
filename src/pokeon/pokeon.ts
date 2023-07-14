import { PokemonName, PokemonItemApiRes, PokemonNamesApiRes, Reader, Transformer, Writer } from '../types'

export type PokeonOptions = {
  namesTransformer: Transformer<object, string>
  pokemonTransformer: Transformer<object, string>
  reader: Reader
  writer: Writer<string>
  namesOutputFilePath?: string
  pokemonOutputFilePath?: string
}

class Pokeon {
  private options: PokeonOptions
  constructor(options: PokeonOptions) {
    this.options = options
  }
  public async execute() {
    const { namesTransformer, reader, writer, namesOutputFilePath } = this.options

    const data = await reader.get<PokemonNamesApiRes>()

    await writer.set(await namesTransformer.transform(data.results), namesOutputFilePath)

    for (let i = 0; i < data.results.length; i++) {
      await this.writePokemonFile(data.results[i].name)
    }
  }

  private async writePokemonFile(name: PokemonName['name']) {
    const { reader, writer, pokemonTransformer, pokemonOutputFilePath } = this.options
    const pokemonData = await reader.get<PokemonItemApiRes>(`/${name}`)

    const yml = await pokemonTransformer.transform(pokemonData)
    const path = pokemonOutputFilePath ? pokemonOutputFilePath.replace('[name]', name) : ''
    await writer.set(yml, path)
  }
}

export default Pokeon
