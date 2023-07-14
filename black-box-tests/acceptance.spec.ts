import fetch from 'node-fetch'
import { readFileSync, unlinkSync } from 'fs'
import YAML from 'yaml'

describe('Acceptance tests', () => {
  it('should create a pokemon.yml when the webhook is called', async () => {
    const file = 'pokemon.yml'
    await triggerWebhook()

    const data = await readFile(file)

    removeFile(file)

    expect(data.names[0]).toEqual('bulbasaur')
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function triggerWebhook() {
    await fetch('http://localhost:3000/api/webhook')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function readFile(path: string) {
    const file = readFileSync(path, 'utf-8')

    return YAML.parse(file)
  }

  async function removeFile(path: string) {
    unlinkSync(path)
  }
})
