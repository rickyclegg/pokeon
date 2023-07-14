import dotenv from 'dotenv'
import fetch from 'node-fetch'
import Server from './server'
import Pokeon from './pokeon/pokeon'
import config from './config'
import { promises as fs } from 'fs'
import NamesYamlTransformer from './pokeon/names-yaml-transformer'
import ApiReader from './pokeon/api-reader'
import { HttpClient } from './types'
import FileWriter from './pokeon/file-writer'
import PokemonYamlTransformer from './pokeon/pokemon-yaml-transformer'

dotenv.config()

const appConfig = config()

const port = process.env.PORT

const { app } = new Server(
  new Pokeon({
    reader: new ApiReader({
      baseUrl: appConfig.POKEMON_API,
      httpClient: fetch as unknown as HttpClient,
    }),
    namesTransformer: new NamesYamlTransformer(),
    pokemonTransformer: new PokemonYamlTransformer(),
    writer: new FileWriter({
      fileClient: fs.writeFile,
      basePath: appConfig.BASE_OUTPUT_FILE_PATH,
    }),
    namesOutputFilePath: appConfig.NAMES_OUTPUT_FILE_PATH,
    pokemonOutputFilePath: appConfig.POKEMON_OUTPUT_FILE_PATH,
  }),
)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
