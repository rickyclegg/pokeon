import dotenv from 'dotenv'
import Server from './server'
import Pokeon from './pokeon/pokeon'
import config from './config'
import YamlTransformer from './pokeon/yaml-transformer'

dotenv.config()

const appConfig = config()

const port = process.env.PORT

const { app } = new Server(new Pokeon({ api: appConfig.POKEMON_API, transformer: new YamlTransformer() }))

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
