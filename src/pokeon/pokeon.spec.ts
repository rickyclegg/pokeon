import Pokeon from './pokeon'
import { Reader, Transformer, Writer } from '../types'

describe('Pokeon', () => {
  it('should output a names file', async () => {
    const expectedOutput = 'dummyValue'
    const stubReader = new FakeReader(expectedOutput)
    const dummyTransform = new FakeTransformer()
    const stubWriter = new FakeWriter()

    jest.spyOn(stubReader, 'get').mockResolvedValue({ results: expectedOutput })
    jest.spyOn(stubWriter, 'set')

    const pokeon = new Pokeon({
      reader: stubReader,
      namesTransformer: dummyTransform,
      pokemonTransformer: dummyTransform,
      writer: stubWriter,
    })

    await pokeon.execute()

    expect(stubWriter.set).toHaveBeenCalledWith(expectedOutput)
  })

  xit('should output a pokemon file', async () => {
    const expectedPokemonOutput = 1
    const dummyReader = new FakeReader(expectedPokemonOutput)
    const dummyTransformer = new FakeTransformer()
    const stubPokemonTransformer = new FakeTransformer()
    const stubWriter = new FakeWriter()

    jest.spyOn(stubWriter, 'set')

    const pokeon = new Pokeon({
      reader: dummyReader,
      namesTransformer: dummyTransformer,
      pokemonTransformer: stubPokemonTransformer,
      writer: stubWriter,
    })

    await pokeon.execute()

    expect(stubWriter.set).toHaveBeenCalledWith(expectedPokemonOutput)
  })
})

class FakeReader implements Reader {
  private data: any
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  constructor(data) {
    this.data = data
  }
  async get() {
    return this.data
  }
}

class FakeTransformer implements Transformer<any, any> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  async transform(input) {
    return input
  }
}

class FakeWriter implements Writer<any> {
  async set() {
    return undefined
  }
}
