import dotenv from 'dotenv'
import fetch from 'node-fetch'
import Server from './server'
import Pokeon from './pokeon/pokeon'
import config from './config'
import { promises as fs } from 'fs'
import YamlTransformer from './pokeon/yaml-transformer'
import ApiReader from './pokeon/api-reader'
import { HttpClient } from './types'
import FileWriter from './pokeon/file-writer'

dotenv.config()

const appConfig = config()

const port = process.env.PORT

const { app } = new Server(
  new Pokeon({
    reader: new ApiReader({
      api: appConfig.POKEMON_API,
      httpClient: fetch as unknown as HttpClient,
    }),
    transformer: new YamlTransformer(),
    writer: new FileWriter({
      fileClient: fs.writeFile,
      filePath: appConfig.NAMES_OUTPUT_FILE_PATH,
    }),
  }),
)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
