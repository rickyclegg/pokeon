import YAML from 'yaml'
import { Pokemon, Transformer } from '../types'

class NamesYamlTransformer implements Transformer<Array<Pokemon>, string> {
  public async transform(data: Array<Pokemon>): Promise<string> {
    const names = data.reduce<Array<string>>((arr, item) => {
      return [...arr, item.name]
    }, [])

    return YAML.stringify({ names: names })
  }
}

export default NamesYamlTransformer
