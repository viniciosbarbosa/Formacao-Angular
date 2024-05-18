import { Entrada } from "./../../models/entrada.model";
import { DashboardService } from "./../../services/dashboard.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // meses = [
  //   { value: 0, viewValue: "Janeiro" },
  //   { value: 1, viewValue: "Fevereiro" },
  //   { value: 2, viewValue: "Março" },
  //   { value: 3, viewValue: "Abril" },
  //   { value: 4, viewValue: "Maio" },
  //   { value: 5, viewValue: "Junho" },
  //   { value: 6, viewValue: "Julho" },
  //   { value: 7, viewValue: "Agosto" },
  //   { value: 8, viewValue: "Setembro" },
  //   { value: 9, viewValue: "Outubro" },
  //   { value: 10, viewValue: "Novembro" },
  //   { value: 11, viewValue: "Dezembro" },
  // ];

  entradas: any[] = [];
  saldo = 0;
  despesa = 0;
  receita = 0;
  meses: Array<any> = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getEntradas();
    this.getMonth();
  }

  getMonth() {
    this.dashboardService.getAllMounts().subscribe({
      next: (response) => {
        this.meses = response;
        console.log(this.meses);
      },
    });
  }

  getEntradas() {
    this.dashboardService.getEntradas().subscribe({
      next: (response) => {
        this.entradas = response;
        console.log(this.entradas);
        this.getReceitas();
      },
    });
  }

  getReceitas() {
    this.entradas.forEach((entrada: Entrada) => {
      if (entrada.tipo === "receita") {
        this.receita += parseInt(entrada.valor);
      } else {
        this.despesa += parseInt(entrada.valor);
      }

      return (this.saldo = this.receita - this.despesa);
    });
  }
}
