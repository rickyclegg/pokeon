import express, { Express, Request, Response } from 'express'
import Pokeon from './pokeon'

class Server {
  public app: Express
  constructor() {
    this.app = express()

    this.app.get('/api/webhook', async (req: Request, res: Response) => {
      const main = new Pokeon()

      await main.execute()

      res.sendStatus(200)
    })
  }
}

export default Server
