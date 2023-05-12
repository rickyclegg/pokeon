import express, { Express, Request, Response } from 'express'
import { writeFileSync } from 'fs'
import YAML from 'yaml'

const app: Express = express()

app.get('/api/webhook', (req: Request, res: Response) => {
  writeFileSync('pokemon.yml', YAML.stringify({ names: ['bulbasaur'] }))

  res.sendStatus(200)
})
export default app
