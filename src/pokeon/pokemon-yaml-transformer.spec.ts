import PokemonYamlTransformer from './pokemon-yaml-transformer'

describe('Pokemon Yaml Transformer', () => {
  it('should transform json to a string of yaml', async () => {
    const expectedPokemon = { id: 1 }

    const transformer = new PokemonYamlTransformer()
    const result = await transformer.transform(expectedPokemon)

    expect(result).toContain(`id: ${expectedPokemon.id}`)
  })
})
