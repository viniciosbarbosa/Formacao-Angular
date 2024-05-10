import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  nota: number = 5;
  title: string = "4";
  imgUrl: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7y20iKGs05xJJZhBzLGvH3q3YDP58_0Fk0-aGaHgvCg&s";

  constructor() {
    console.log("Componente Construtor");
  }

  mudarTexto() {
    this.title += "Ola";
  }

  ngOnInit(): void {
    console.log("Componente OnInit");
    // this.title = "Novo titulo";
  }
  ngOnChanges(): void {
    console.log("Componente OnChanges");
  }

  ngDoCheck(): void {
    console.log("Componente DoCheck");
  }

  ngAfterContentInit(): void {
    console.log("Componente AfterContentInit");
  }

  ngAfterViewInit(): void {
    console.log("Componente AfterViewInit");
  }

  ngAfterContentChecked(): void {
    console.log("Componente AfterContentChecked");
  }

  ngAfterViewChecked(): void {
    console.log("Componente AfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Componente OnDestroy");
  }

  chamarFuncao() {
    console.log("Este e um click");
  }

  /**
  * Data Binding
  * 
  * Interpolação exemplo {{title}}
  * 
  * Property Binding <img [src='imgUrl'] />
  * 
  * Event Binding <button (click)="chamarFuncao()">Chamar</button>
  * 
  * Two way Data Binding <input [(ngModel)]='title' />

  */

  /**
   * Diretivas de Decisoes
   *
   * Ngif
   */
}
