import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatarMoeda",
})
export class FormatarMoedaPipe implements PipeTransform {
  transform(
    value: any,
    locale: string = "pt-BR",
    currency: string = "BRL"
  ): any {
    if (value == null || isNaN(value)) {
      return null;
    }

    const formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    });

    return formatter.format(value);
  }
}
