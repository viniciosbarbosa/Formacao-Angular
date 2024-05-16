import { Component } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent {
  menu: any = [
    { descricao: "DashBoard", rota: "dashboard" },
    { descricao: "Categorias", rota: "categorias" },
    { descricao: "Entradas", rota: "Entradas" },
  ];
}
