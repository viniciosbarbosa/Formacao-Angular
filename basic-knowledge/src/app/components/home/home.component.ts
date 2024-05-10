import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  people: Array<any> = [
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
      gender: "",
      age: "25",
      salary: "5000",
    },
  ];
}
