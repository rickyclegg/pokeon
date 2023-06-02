import FileWriter from './file.writer'

describe('File Writer', () => {
  it('should write a file to disk', async () => {
    const { fileClient: stubFileClient, data: dummyData } = createTestDeps()
    const dummyFilePath = 'dummyFilePath'

    stubFileClient.mockResolvedValue(null)

    const writer = new FileWriter({ fileClient: stubFileClient })

    await writer.set(dummyFilePath, dummyData)

    expect(stubFileClient).toHaveBeenCalledWith(dummyFilePath, dummyData)
  })

  const createTestDeps = () => {
    return {
      fileClient: jest.fn(),
      data: {
        names: ['dummyName'],
      },
    }
  }
})
