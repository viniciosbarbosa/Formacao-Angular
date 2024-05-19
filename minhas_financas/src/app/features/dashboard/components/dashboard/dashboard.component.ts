import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Entrada } from "./../../models/entrada.model";
import { DashboardService } from "./../../services/dashboard.service";
import { Component, OnInit } from "@angular/core";
import { entrada } from "src/app/features/entradas/models/entrada.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  entradas: Array<any> = [];
  saldo = 0;
  despesa = 0;
  receita = 0;
  meses: Array<any> = [];
  anos: Array<any> = [];
  formDashBoard!: FormGroup;

  constructor(
    private dashboardService: DashboardService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getEntradas();
    this.getMonth();
    this.getYear();
    this.criarFormulario();
  }

  criarFormulario() {
    this.formDashBoard = this.formBuilder.group({
      mes: ["", Validators.required],
      ano: ["", Validators.required],
    });
  }

  getMonth() {
    this.dashboardService.getAllMounts().subscribe({
      next: (response) => {
        this.meses = response;
      },
    });
  }
  getYear() {
    this.dashboardService.getAllYears().subscribe({
      next: (response) => {
        this.anos = response;
      },
    });
  }

  getEntradas() {
    this.dashboardService.getEntradas().subscribe({
      next: (response) => {
        this.entradas = response;
        this.getReceitas(this.entradas);
      },
    });
  }

  getBillByMouthYear() {
    const payload = {
      mes: this.formDashBoard.value.mes.padStart(2, "0"),
      ano: this.formDashBoard.value.ano,
    };

    this.dashboardService.getEntradasFilter(payload).subscribe({
      next: (response) => {
        this.entradas = response[0];
        console.log(response[0]);
        this.getReceitas(this.entradas);
      },
      error(err) {
        console.log(err);
      },
    });
  }

  getReceitas(entradas: any) {
    this.saldo = 0;
    this.receita = 0;
    this.despesa = 0;

    entradas.forEach((entrada: Entrada) => {
      if (entrada.tipo === "receita") {
        this.receita += parseInt(entrada.valor);
      } else {
        this.despesa += parseInt(entrada.valor);
      }
      return (this.saldo = this.receita - this.despesa);
    });
  }
}
