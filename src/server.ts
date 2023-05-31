import express, { Express, Request, Response } from 'express'
import { Executable } from './types'

class Server {
  public app: Express
  constructor(main: Executable) {
    this.app = express()

    this.app.get('/api/webhook', async (req: Request, res: Response) => {
      await main.execute()

      res.sendStatus(200)
    })
  }
}

export default Server
