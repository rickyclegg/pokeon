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
