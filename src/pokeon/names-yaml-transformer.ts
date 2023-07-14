import YAML from 'yaml'
import { PokemonName, Transformer } from '../types'

class NamesYamlTransformer implements Transformer<Array<PokemonName>, string> {
  public async transform(data: Array<PokemonName>): Promise<string> {
    const names = data.reduce<Array<string>>((arr, item) => {
      return [...arr, item.name]
    }, [])

    return YAML.stringify({ names: names })
  }
}

export default NamesYamlTransformer
