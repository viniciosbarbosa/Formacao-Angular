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
  title = "basic-knowledge";

  constructor() {
    console.log("Componente Construtor");
  }

  mudarTexto() {
    this.title += "a";
  }

  ngOnInit(): void {
    console.log("Componente OnInit");
    this.title = "Novo titulo";
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
}
