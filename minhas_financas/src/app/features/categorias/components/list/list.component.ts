import { CategoriasService } from "./../../services/categorias.service";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

export interface Catergorias {
  nome: string;
  descricao: string;
  id: number;
}

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit, AfterViewInit {
  constructor(private categoriasService: CategoriasService) {}

  displayedColumns: string[] = ["nome", "descricao"];
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
        console.log(this.categorias);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
