/* eslint-disable @typescript-eslint/ban-ts-comment  */
import { when } from 'jest-when'
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

  it('should output a pokemon files', async () => {
    const expectedNames = [{ name: 'myFirstPokemon' }, { name: 'mySecondPokemon' }]

    const stubReader = new FakeReader()
    const dummyTransformer = new FakeTransformer()
    const stubWriter = new FakeWriter()

    jest.spyOn(stubReader, 'get')
    jest.spyOn(stubWriter, 'set')

    when(stubReader.get).mockResolvedValue({ results: expectedNames })

    const pokeon = new Pokeon({
      reader: stubReader,
      namesTransformer: dummyTransformer,
      pokemonTransformer: dummyTransformer,
      writer: stubWriter,
    })

    await pokeon.execute()

    expect(stubWriter.set).toHaveBeenCalledTimes(expectedNames.length + 1)

    expectedNames.forEach(({ name }, index) => {
      // @ts-ignore
      const pokemonCall = stubWriter.set.mock.calls[index + 1]

      expect(pokemonCall[1]).toBe(`/${name}.yml`)
    })
  })
})

class FakeReader implements Reader {
  private data: any
  //@ts-ignore
  constructor(data?) {
    this.data = data
  }
  async get() {
    return this.data
  }
}

class FakeTransformer implements Transformer<any, any> {
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
