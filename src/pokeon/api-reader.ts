import { HttpClient, PokemonApiRes, Reader } from '../types'

export type PokemonReaderOptions = {
  baseUrl: string
  httpClient: HttpClient
}

class ApiReader implements Reader {
  private options: PokemonReaderOptions
  constructor(options: PokemonReaderOptions) {
    this.options = options
  }

  public async get(path?: string): Promise<Array<{ name: string }>> {
    const { httpClient, baseUrl } = this.options

    const res = await httpClient(`${baseUrl}${path ? path : ''}`)
    const pokeJson = (await res.json()) as PokemonApiRes

    return pokeJson.results
  }
}

export default ApiReader
