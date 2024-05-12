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
  people: Array<Pessoa> = [
    {
      name: "vinicius",
      gender: "M",
      age: "23",
      salary: "15000",
    },
    {
      name: "luana",
      gender: "F",
      age: "24",
      salary: "2300",
    },
    {
      name: "youko",
      gender: "F",
      age: "25",
      salary: "5000",
    },
  ];

  displayedColumns: string[] = ["name", "gender", "age", "salary"];
  dataSource!: MatTableDataSource<Pessoa>;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.people);
  }
}
