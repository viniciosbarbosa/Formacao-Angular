import { ActivatedRoute, Router } from "@angular/router";
import { CategoriasService } from "./../../services/categorias.service";
import { Component, OnInit } from "@angular/core";
import { Catergorias } from "../../models/categioria.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  categoria!: Catergorias;

  formCategoria!: FormGroup;

  constructor(
    private categoriasService: CategoriasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  criarFormulario() {
    this.formCategoria = this.formBuilder.group({
      nome: ["", Validators.required],
      descricao: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCategoriasPeloId();
    this.criarFormulario();
  }

  getParamsByUrl() {
    let id: string = "";

    this.activatedRoute.params.subscribe((params) => {
      id = params["id"];
    });

    return id;
  }

  async getCategoriasPeloId() {
    let idUserbyUrl = await this.getParamsByUrl();

    this.categoriasService.getCategoriaById(idUserbyUrl).subscribe({
      next: (response: Catergorias) => {
        this.categoria = response;
        this.atualizarFormulario(this.categoria);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  atualizarFormulario(categoria: Catergorias) {
    console.log(categoria);
    this.formCategoria.patchValue({
      nome: categoria.nome,
      descricao: categoria.descricao,
    });
  }
}
