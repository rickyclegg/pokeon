import fetch from 'node-fetch'
import { readFileSync } from 'fs'
import YAML from 'yaml'

describe('Acceptance tests', () => {
  it('should test', async () => {
    expect('test').toBeTruthy()
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function triggerWebhook() {
    await fetch('/api/webhook')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function readFile() {
    const file = readFileSync('pokemon.yaml', 'utf-8')

    return YAML.parse(file)
  }
})
