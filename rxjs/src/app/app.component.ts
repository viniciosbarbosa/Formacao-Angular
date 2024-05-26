import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { forkJoin, from, interval, of, timer } from 'rxjs';
import {
  tap,
  filter,
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  catchError,
  take,
  takeUntil,
} from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  formGithub!: FormGroup;
  numeros$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  numerosTake$ = interval(1000);
  testNg: string = 'oi';
  usuarioGithub: any;

  timer$ = timer(5000);

  observable1$ = of('valor 1');
  observable3$ = of('valor 3');
  observable2$ = of('valor 2');

  ngOnInit(): void {
    this.numeros$
      .pipe(
        filter((numero: number) => numero % 2 !== 0),
        map((numero) => 'Impar ' + numero),
        tap(console.log)
      )
      .subscribe();

    this.criarForm();

    // this.operadorTake();
    // this.operadorTakeUntil();
    this.operadorForkJoin();
  }

  criarForm() {
    this.formGithub = new FormGroup({
      buscarDoGitHub: new FormControl(''),
    });

    this.formGithub
      .get('buscarDoGitHub')
      ?.valueChanges.pipe(
        debounceTime(500),
        filter((valor) => valor !== ''),
        distinctUntilChanged(),
        switchMap((query) => {
          return ajax.getJSON(`https://api.github.com/users/${query}`).pipe(
            catchError((err) => {
              console.error(err);
              alert(err.response.message);
              return of([]);
            })
          );
        })
      )
      .subscribe((resposta) => {
        this.usuarioGithub = resposta;
        console.log(resposta);
      });
  }

  operadorTake() {
    const emissao$ = this.numerosTake$.pipe(take(5));

    emissao$.subscribe((value) => console.log('take', value));
  }

  operadorTakeUntil() {
    const emissao$ = this.numerosTake$.pipe(takeUntil(this.timer$));

    emissao$.subscribe((value) => console.log('Take Until', value));
  }

  operadorForkJoin() {
    let resultado$ = forkJoin([
      this.observable1$,
      this.observable2$,
      this.observable3$,
    ]);

    resultado$.subscribe((value) => {
      const valuesObervable = value;

      valuesObervable.forEach((value) => {
        console.log(value);
      });
    });
  }
}

// return from(fetch(`https://api.github.com/search/repositories?q=${query}`));
