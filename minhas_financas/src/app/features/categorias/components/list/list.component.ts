import { CategoriasService } from "./../../services/categorias.service";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Catergorias } from "../../models/categioria.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit, AfterViewInit {
  constructor(
    private categoriasService: CategoriasService,
    private router: Router
  ) {}

  displayedColumns: string[] = ["nome", "descricao", "editar", "excluir"];
  dataSource = new MatTableDataSource<Catergorias>();

  categorias: Array<Catergorias> = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.getCategorias();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getCategorias() {
    this.categoriasService.getCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
        this.dataSource.data = this.categorias;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  chamarEdicao(categoria: Catergorias) {
    this.router.navigate(["categorias/editar", categoria.id]);
  }

  criarNovaCatergoria() {
    this.router.navigate(["categorias/nova-categoria"]);
  }

  excluir(id: string) {
    console.log(typeof id);

    this.categoriasService.excluirCategoria(id).subscribe({
      next: (response) => {
        this.getCategorias();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
