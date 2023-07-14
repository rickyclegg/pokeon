import ApiReader from './api-reader'

describe('Api Reader', () => {
  it('should return me some data', async () => {
    const expectedUrl = 'www.mywebsite.com'
    const expectedPath = '/pokemon'
    const { httpClient: stubHttpClient, httpClientRes } = createTestDeps()
    const expectedJson = { results: [{ name: 'Bulbasaur' }] }

    httpClientRes.json.mockResolvedValue(expectedJson)
    stubHttpClient.mockResolvedValue(httpClientRes)

    const reader = new ApiReader({ baseUrl: expectedUrl, httpClient: stubHttpClient })

    const res = await reader.get(expectedPath)

    expect(stubHttpClient).toBeCalledWith(`${expectedUrl}${expectedPath}`)
    expect(res[0].name).toEqual(expectedJson.results[0].name)
  })

  const createTestDeps = () => {
    return {
      httpClient: jest.fn(),
      httpClientRes: { json: jest.fn() },
    }
  }
})
