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
  algumCampoAlterado: boolean = false;
  textoAcao = "";
  idCategory: string = "";

  constructor(
    private categoriasService: CategoriasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.verifyParamsByUrl();
    this.criarFormulario();
  }

  criarFormulario() {
    this.formCategoria = this.formBuilder.group({
      nome: ["", Validators.required],
      descricao: ["", Validators.required],
    });

    this.formCategoria.valueChanges.subscribe(() => {
      this.verificarAlteracoes();
    });
  }

  verifyParamsByUrl() {
    this.activatedRoute.params.subscribe((params) => {
      this.idCategory = params["id"];
      if (this.idCategory) {
        this.getCategoriasPeloId(this.idCategory);
        this.textoAcao = "Editar";
      } else {
        this.textoAcao = "Nova";
      }
    });
  }

  async getCategoriasPeloId(idUser: string) {
    this.categoriasService.getCategoriaById(idUser).subscribe({
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
    this.formCategoria.patchValue({
      nome: categoria.nome,
      descricao: categoria.descricao,
      id: categoria.id,
    });
  }

  verificarAlteracoes() {
    this.algumCampoAlterado = Object.keys(this.formCategoria.controls).some(
      (campo) => this.formCategoria.get(campo)?.dirty
    );
  }

  salvarCategoria() {
    if (this.formCategoria.touched && this.algumCampoAlterado) {
      const payload = {
        nome: this.formCategoria.value.nome,
        descricao: this.formCategoria.value.descricao,
        id: this.idCategory,
      };
      if (this.idCategory) {
        this.editarCategoria(payload);
      } else {
        this.criarCategoria(payload);
      }
    }
  }

  criarCategoria(payload: Catergorias) {
    this.categoriasService.criarCategoria(payload).subscribe({
      next: (response) => {
        if (response) {
          this.router.navigate(["/categorias"]);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editarCategoria(payload: Catergorias) {
    this.categoriasService.alterarCategoria(payload).subscribe({
      next: (response) => {
        if (response) {
          this.router.navigate(["/categorias"]);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
