import NamesYamlTransformer from './names-yaml-transformer'

describe('Names Yaml Transformer', () => {
  it('should transform json to a string of yaml', async () => {
    const expectedItems = [createRandomItem(), createRandomItem()]

    const transformer = new NamesYamlTransformer()
    const result = await transformer.transform(expectedItems)

    expect(result).toContain(`names:`)

    expectedItems.forEach((item) => {
      expect(result).toContain(`- ${item.name}`)
    })
  })

  it('should NOT continue urls', async () => {
    const transformer = new NamesYamlTransformer()
    const result = await transformer.transform([createRandomItem()])

    expect(result).not.toContain(`- url`)
  })

  const createRandomItem = () => ({
    name: `name${Math.random() * 1000}`,
    url: `url${Math.random() * 1000}`,
  })
})
