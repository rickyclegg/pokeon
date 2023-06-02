import { Writer } from '../types'

export type FileWriterOptions = {
  fileClient(filePath: string, data: string): Promise<void>
}
class FileWriter implements Writer<string> {
  private options: FileWriterOptions
  constructor(options: FileWriterOptions) {
    this.options = options
  }

  public async set(filePath: string, data: string): Promise<void> {
    const { fileClient } = this.options

    return await fileClient(filePath, data)
  }
}

export default FileWriter
