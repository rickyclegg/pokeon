import ApiReader from './api-reader'

describe('Api Reader', () => {
  it('should return me some data', async () => {
    const expectedUrl = 'www.mywebsite.com'
    const expectedPath = '/pokemon'
    const { httpClient: stubHttpClient, httpClientRes } = createTestDeps()
    const expectedJson = 'dummyJson'

    httpClientRes.json.mockResolvedValue(expectedJson)
    stubHttpClient.mockResolvedValue(httpClientRes)

    const reader = new ApiReader({ baseUrl: expectedUrl, httpClient: stubHttpClient })

    const res = await reader.get<string>(expectedPath)

    expect(stubHttpClient).toBeCalledWith(`${expectedUrl}${expectedPath}`)
    expect(res).toEqual(expectedJson)
  })

  const createTestDeps = () => {
    return {
      httpClient: jest.fn(),
      httpClientRes: { json: jest.fn() },
    }
  }
})
