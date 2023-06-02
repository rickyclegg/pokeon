export interface Executable {
  execute(): Promise<void>
}

export interface Transformer<T> {
  toOutput(): Promise<T>
}
