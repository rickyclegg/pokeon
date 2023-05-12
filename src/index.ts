import dotenv from 'dotenv'
import Server from './server'

dotenv.config()

const port = process.env.PORT

const { app } = new Server()

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
