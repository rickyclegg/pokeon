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
export interface Reader {
  get(): Promise<Array<{ name: string }>>
}
export interface Writer<D> {
  set(data: D): Promise<void>
}
