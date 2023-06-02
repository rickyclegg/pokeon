export type FileWriterOptions = {
  fileClient(filePath: string, data: any): Promise<void>
}
class FileWriter {
  private options: FileWriterOptions
  constructor(options: FileWriterOptions) {
    this.options = options
  }
  public async set(filePath: string, data: any): Promise<void> {
    const { fileClient } = this.options

    return await fileClient(filePath, data)
  }
}

export default FileWriter
