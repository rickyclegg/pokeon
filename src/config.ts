import dotenv from 'dotenv'

export interface Config {
  POKEMON_API: string
}

export default function (): Config {
  dotenv.config()

  return process.env as unknown as Config
}
