import dotenv from 'dotenv'

export interface Config {
  POKEMON_API: string
  BASE_OUTPUT_FILE_PATH: string
  NAMES_OUTPUT_FILE_PATH: string
  POKEMON_OUTPUT_FILE_PATH: string
}

export default function (): Config {
  dotenv.config()

  return process.env as unknown as Config
}
