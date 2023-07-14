import { HttpClient, Reader } from '../types'

export type PokemonReaderOptions = {
  baseUrl: string
  httpClient: HttpClient
}

class ApiReader implements Reader {
  private options: PokemonReaderOptions
  constructor(options: PokemonReaderOptions) {
    this.options = options
  }

  public async get<T>(path?: string): Promise<T> {
    const { httpClient, baseUrl } = this.options

    const res = await httpClient(`${baseUrl}${path ? path : ''}`)
    const pokeJson = (await res.json()) as T

    return pokeJson
  }
}

export default ApiReader
