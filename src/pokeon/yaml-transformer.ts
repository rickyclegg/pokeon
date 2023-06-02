import YAML from 'yaml'
import { Transformer } from '../types'

class YamlTransformer implements Transformer<string> {
  private data: JSON
  constructor(data: any) {
    this.data = data
  }
  public async toOutput(): Promise<string> {
    return YAML.stringify(this.data)
  }
}

export default YamlTransformer
