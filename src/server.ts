import express, { Express, Request, Response } from 'express'
import Pokeon from './pokeon'

const app: Express = express()

app.get('/api/webhook', async (req: Request, res: Response) => {
  const main = new Pokeon()

  await main.execute()

  res.sendStatus(200)
})
export default app
