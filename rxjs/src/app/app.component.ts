import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  formGithub!: FormGroup;
  numeros$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  testNg: string = 'oi';

  ngOnInit(): void {
    this.numeros$
      .pipe(
        filter((numero: number) => numero % 2 !== 0),
        map((numero) => 'Impar ' + numero),
        tap(console.log)
      )
      .subscribe();

    this.criarForm();
  }

  criarForm() {
    this.formGithub = new FormGroup({
      buscarDoGitHub: new FormControl(''),
    });

    this.formGithub.get('buscarDoGitHub')?.valueChanges.subscribe((value) => {
      console.log('Valor atualizado:', value);
      // Adicione aqui qualquer lógica adicional que você precisa ao mudar o valor
    });
  }
}
