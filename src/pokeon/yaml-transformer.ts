import YAML from 'yaml'

class YamlTransformer {
  private data: JSON
  constructor(data: any) {
    this.data = data
  }
  public async toOutput(): Promise<string> {
    return YAML.stringify(this.data)
  }
}

export default YamlTransformer
