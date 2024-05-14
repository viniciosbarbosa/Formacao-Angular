import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface Pessoa {
  name: string;
  gender: string;
  age: string;
  salary: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  people!: Pessoa[];

  displayedColumns: string[] = ["name", "gender", "age", "salary"];
  dataSource!: MatTableDataSource<Pessoa>;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.people);
  }
}
