import YamlTransformer from './yaml-transformer'

describe('Yaml Transformer', () => {
  it('should transform json to a string of yaml', async () => {
    const expectedResult = {
      names: ['Ricky', 'Veronika'],
    }

    const transformer = new YamlTransformer(expectedResult)
    const result = await transformer.toOutput()

    expectedResult.names.forEach((name) => {
      expect(result).toContain(`- ${name}`)
    })
  })
})
