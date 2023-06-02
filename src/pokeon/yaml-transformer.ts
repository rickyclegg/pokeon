import YAML from 'yaml'
import { Transformer } from '../types'

class YamlTransformer implements Transformer<string> {
  public async transform(data: any): Promise<string> {
    return YAML.stringify(data)
  }
}

export default YamlTransformer
