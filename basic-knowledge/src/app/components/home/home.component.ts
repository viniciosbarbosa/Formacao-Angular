import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { filter, map, of, tap } from "rxjs";
import { HomeService } from "../services/home.service";

export interface Pessoa {
  name: string;
  gender: string;
  age: number;
  salary: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  title = null;

  frutas: string[] = [];

  frutas$ = of("banana", "uva", "morango", "abacaxi", "pera", "melancia");

  constructor(private homeService: HomeService) {
    // this.frutas$
    //   .pipe(
    //     tap(console.log),
    //     map((fruta) => fruta.toUpperCase()),
    //     tap(console.log),
    //     filter((fruta) => fruta.startsWith("B") || fruta.startsWith("M"))
    //   )
    //   .subscribe((response) => {
    //     this.frutas.push(response);
    //     console.log(this.frutas);
    //   });
  }

  people!: Pessoa[];
  displayedColumns: string[] = ["name", "gender", "age", "salary"];
  dataSource!: MatTableDataSource<Pessoa>;
  ngOnInit(): void {
    this.homeService.getClients().subscribe((clients) => {
      this.people = clients;
      console.log(this.people);

      this.dataSource = new MatTableDataSource(this.people);
    });
  }
}
