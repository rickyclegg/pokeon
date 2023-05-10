import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Pokeon Server v1')
})
export default app
