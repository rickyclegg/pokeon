import YAML from 'yaml'
import { Transformer } from '../types'

class YamlTransformer implements Transformer<object, string> {
  public async transform(data: object): Promise<string> {
    return YAML.stringify(data)
  }
}

export default YamlTransformer
