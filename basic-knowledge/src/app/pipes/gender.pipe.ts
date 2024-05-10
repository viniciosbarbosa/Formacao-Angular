import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "genderPipe",
})
export class GenderPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    let sexo;
    let valueLower = value.toLowerCase();

    switch (valueLower) {
      case "f":
        sexo = "Feminino";
        break;
      case "m":
        sexo = "Masculino";
        break;
      default:
        sexo = "Não Definido";
    }

    return sexo;
  }
}
