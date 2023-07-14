import { FileClient, Writer } from '../types'

export type FileWriterOptions = {
  fileClient: FileClient
  basePath: string
}
class FileWriter implements Writer<string> {
  private options: FileWriterOptions
  constructor(options: FileWriterOptions) {
    this.options = options
  }

  public async set(data: string, path?: string): Promise<void> {
    const { fileClient, basePath } = this.options

    return await fileClient(`${basePath}${path ? path : ''}`, data)
  }
}

export default FileWriter
