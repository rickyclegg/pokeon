import express, { Express, Request, Response } from 'express'
import { writeFileSync } from 'fs'
import YAML from 'yaml'
import fetch from 'node-fetch'

const app: Express = express()

app.get('/api/webhook', async (req: Request, res: Response) => {
  const data = await fetch('http://localhost:4000/pokemon')

  const pokemonJson = await data.json()

  writeFileSync('pokemon.yml', YAML.stringify(pokemonJson))

  res.sendStatus(200)
})
export default app
