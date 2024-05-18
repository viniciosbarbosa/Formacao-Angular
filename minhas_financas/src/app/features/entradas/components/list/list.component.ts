import { entrada } from "./../../models/entrada.model";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Entrada } from "src/app/features/dashboard/models/entrada.model";
import { EntradasService } from "../../service/entradas.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  constructor(
    private entradaService: EntradasService,
    private router: Router
  ) {}

  displayedColumns: string[] = [
    "nome",
    "pago",
    "data",
    "valor",
    "tipo",
    "editar",
    "excluir",
  ];
  dataSource = new MatTableDataSource<Entrada>();

  entradas: Array<Entrada> = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.getEntradas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getEntradas() {
    this.entradaService.getEntradas().subscribe({
      next: (data: Entrada[]) => {
        this.entradas = data;
        this.dataSource.data = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  formatarValor(valor: string): number {
    return parseFloat(valor.replace(",", "."));
  }

  chamarEdicao(entrada: Entrada) {
    this.router.navigate(["entradas/editar", entrada.id]);
  }

  excluir() {}

  novaEntrada() {
    this.router.navigate(["entrada/nova-categoria"]);
  }
}
