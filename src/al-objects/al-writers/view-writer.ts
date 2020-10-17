import { Helper } from "../helper";
import { IView } from "../models/IView";

export class ViewWriter {
  static write(view: IView, indentation: number): Array<string> {
    const lines: Array<string> = [];
    const pad = Helper.pad(indentation);
    const pad12 = Helper.pad(indentation + 4);

    lines.push(`${pad}${view.header}`);
    view.comments.forEach((line) => lines.push(`${pad}${line}`));
    lines.push(`${pad}{`);

    if (view.properties.length > 0) {
      view.properties.forEach((property) => {
        lines.push(`${pad12}${property}`);
      });
      lines.push("");
    }

    if (lines[lines.length - 1] === "") lines.pop();
    lines.push(`${pad}}`);
    return lines;
  }
}