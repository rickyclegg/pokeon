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
  get(path?: string): Promise<Array<{ name: string }>>
}
export interface Writer<D> {
  set(data: D): Promise<void>
}

export type Pokemon = {
  name: string
}

export type PokemonApiRes = {
  results: Array<Pokemon>
}
