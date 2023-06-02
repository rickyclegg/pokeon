import { Writer } from '../types'

export type FileWriterOptions = {
  fileClient(filePath: string, data: string): Promise<void>
  filePath: string
}
class FileWriter implements Writer<string> {
  private options: FileWriterOptions
  constructor(options: FileWriterOptions) {
    this.options = options
  }

  public async set(data: string): Promise<void> {
    const { fileClient, filePath } = this.options

    return await fileClient(filePath, data)
  }
}

export default FileWriter
