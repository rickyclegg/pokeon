import express, { Express, Request, Response } from 'express'
import { writeFileSync } from 'fs'
import YAML from 'yaml'
import fetch from 'node-fetch'
import config from './config'

const app: Express = express()

app.get('/api/webhook', async (req: Request, res: Response) => {
  const { POKEMON_API } = config()
  const data = await fetch(POKEMON_API)

  const pokemonJson = await data.json()

  writeFileSync('pokemon.yml', YAML.stringify(pokemonJson))

  res.sendStatus(200)
})
export default app
