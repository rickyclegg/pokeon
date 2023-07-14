import Pokeon from './pokeon'
import { Reader, Transformer, Writer } from '../types'

describe('Pokeon', () => {
  it('should output a names file', async () => {
    const expectedOutput = 'dummyValue'
    const dummyReader = new FakeReader(expectedOutput)
    const dummyTransformer = new FakeTransformer()
    const stubWriter = new FakeWriter()

    jest.spyOn(stubWriter, 'set')

    const pokeon = new Pokeon({
      reader: dummyReader,
      transformer: dummyTransformer,
      writer: stubWriter,
    })

    await pokeon.execute()

    expect(stubWriter.set).toHaveBeenCalledWith(expectedOutput)
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
