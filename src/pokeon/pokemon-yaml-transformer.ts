import YAML from 'yaml'
import { Pokemon, Transformer } from '../types'

class PokemonYamlTransformer implements Transformer<Pokemon, string> {
  public async transform(data: Pokemon): Promise<string> {
    return YAML.stringify(data)
  }
}

export default PokemonYamlTransformer
