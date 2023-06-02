import { ApiReader, HttpClient } from '../types'

export type PokemonReaderOptions = {
  api: string
  httpClient: HttpClient
}

export type PokemonApiRes = {
  results: Array<{ name: string }>
}
class PokemonReader implements ApiReader {
  private options: PokemonReaderOptions
  constructor(options: PokemonReaderOptions) {
    this.options = options
  }

  public async get(): Promise<Array<{ name: string }>> {
    const { httpClient, api } = this.options

    const res = await httpClient(api)
    const pokeJson = (await res.json()) as PokemonApiRes

    return pokeJson.results
  }
}

export default PokemonReader
