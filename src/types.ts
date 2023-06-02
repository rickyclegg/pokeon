export interface Executable {
  execute(): Promise<void>
}

export interface Transformer<I, O> {
  transform(input: I): Promise<O>
}
