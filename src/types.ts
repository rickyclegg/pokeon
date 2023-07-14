export interface Executable {
  execute(): Promise<void>
}

export interface Transformer<I, O> {
  transform(input: I): Promise<O>
}

export type HttpClient = (
  url: string,
  params?: unknown,
) => {
  json: () => Promise<unknown>
}

export type FileClient = (filePath: string, data: string) => Promise<void>

export interface Reader {
  get<T>(path?: string): Promise<T>
}
export interface Writer<D> {
  set(data: D, path?: string): Promise<void>
}

export type PokemonName = {
  name: string
}

export type Pokemon = {
  id: number
}

export type PokemonNamesApiRes = {
  results: Array<PokemonName>
}

export type PokemonItemApiRes = {
  id: number
}
