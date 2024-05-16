import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function criarSenhaForte(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    const temCaracterMaisculo = /[A-Z]+/.test(value);
    const temCaracterMinusculo = /[a-z]+/.test(value);
    const temCaracterNumerico = /[0-9]+/.test(value);
    const temCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
      value
    );

    const senhaValida =
      temCaracterMaisculo &&
      temCaracterMinusculo &&
      temCaracterNumerico &&
      temCaracterEspecial;

    return !senhaValida ? { senhaForte: true } : null;
  };
}
