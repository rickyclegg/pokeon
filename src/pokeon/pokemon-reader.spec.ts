import PokemonReader from './pokemon-reader'

describe('Pokemon Reader', () => {
  it('should return me some pokemon', async () => {
    const { httpClient: stubHttpClient, httpClientRes } = createTestDeps()
    const expectedJson = { results: [{ name: 'Bulbasaur' }] }

    httpClientRes.json.mockResolvedValue(expectedJson)
    stubHttpClient.mockResolvedValue(httpClientRes)

    const reader = new PokemonReader({ api: 'dummyUrl', httpClient: stubHttpClient })

    const res = await reader.get()

    expect(res[0].name).toEqual(expectedJson.results[0].name)
  })

  const createTestDeps = () => {
    return {
      httpClient: jest.fn(),
      httpClientRes: { json: jest.fn() },
    }
  }
})
