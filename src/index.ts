import dotenv from 'dotenv'
import Server from './server'
import Pokeon from './pokeon/pokeon'

dotenv.config()

const port = process.env.PORT

const { app } = new Server(new Pokeon())

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
