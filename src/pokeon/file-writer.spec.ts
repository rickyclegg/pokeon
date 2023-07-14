import FileWriter from './file-writer'

describe('File Writer', () => {
  it('should write a file to disk', async () => {
    const { fileClient: stubFileClient, data: dummyData } = createTestDeps()
    const expectPath = '/my/file/path'
    const expectOptionalPath = '/pokemon'

    stubFileClient.mockResolvedValue(null)

    const writer = new FileWriter({ fileClient: stubFileClient, basePath: expectPath })

    await writer.set(dummyData, expectOptionalPath)

    expect(stubFileClient).toHaveBeenCalledWith(`${expectPath}${expectOptionalPath}`, dummyData)
  })

  const createTestDeps = () => {
    return {
      fileClient: jest.fn(),
      data: 'dummyData',
    }
  }
})
