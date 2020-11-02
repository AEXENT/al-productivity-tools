import IKey from "../components/models/IKey";
import StringBuilder from "../models/string-builder";

export default class KeyWriter {
  static write(key: IKey, indentation: number): string {
    return new StringBuilder()
      .write(key.header, indentation)
      .append(key.comments, indentation)
      .write("{", indentation)
      .write(this.writeBody(key, indentation + 4))
      .write("}", indentation)
      .toString();
  }

  private static writeBody(key: IKey, indentation: number): string {
    return new StringBuilder()
      .write(key.properties, indentation)
      .popEmpty()
      .toString();
  }
}