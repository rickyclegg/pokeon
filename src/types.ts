export interface Executable {
  execute(): Promise<void>
}

export interface Transformer<T> {
  transform(data: any): Promise<T>
}
