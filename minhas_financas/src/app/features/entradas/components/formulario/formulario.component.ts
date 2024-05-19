import { FormGroup } from "@angular/forms";
import { EntradasService } from "./../../service/entradas.service";
import { Component, OnInit } from "@angular/core";
import { entrada } from "../../models/entrada.model";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  textoAcao = "";

  formEntrada!: FormGroup;
  algumCampoAlterado: boolean = false;
  entradas: Array<entrada> = [];

  constructor(private entradasService: EntradasService) {}
  foods = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" },
  ];

  tiposDeEntradas = [{ value: "Receita" }, { value: "Descricao" }];

  statusDePagamento = [
    { value: true, descricao: "Pago" },
    { value: false, descricao: "Pendente" },
  ];
  ngOnInit(): void {}

  salvarEntrada() {}
}
