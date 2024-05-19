import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EntradasService } from "./../../service/entradas.service";
import { Component, OnInit } from "@angular/core";
import { entrada } from "../../models/entrada.model";
import { CategoriasService } from "src/app/features/categorias/services/categorias.service";
import { Catergorias } from "src/app/features/categorias/models/categioria.model";
import * as dayjs from "dayjs";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  textoAcao = "";

  formEntrada!: FormGroup;
  algumCampoAlterado: boolean = false;
  entradas!: entrada;
  categorias: Array<Catergorias> = [];
  idEntrada = "";

  constructor(
    private readonly categoriasService: CategoriasService,
    private entradasService: EntradasService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  tiposDeEntradas = [{ value: "receita" }, { value: "despesa" }];

  statusDePagamento = [
    { value: true, descricao: "Pago" },
    { value: false, descricao: "Pendente" },
  ];
  ngOnInit(): void {
    this.verifyParamsByUrl();
    this.criarFormulario();
    this.getCategorias();
  }

  verifyParamsByUrl() {
    this.activatedRoute.params.subscribe((params) => {
      this.idEntrada = params["id"];

      if (this.idEntrada) {
        this.getEntradaPeloId(this.idEntrada);
        this.textoAcao = "Edição";
      } else {
        this.textoAcao = "Cadastrar";
      }
    });
  }

  atualizarFormulario(entrada: entrada) {
    console.log(entrada);

    const dataFormatada = entrada.data.split("/");

    this.formEntrada.setValue({
      nome: entrada.nome,
      categoriaId: entrada.categoriaId.toString(),
      pago: entrada.pago,
      data: new Date(+dataFormatada[2], +dataFormatada[1], +dataFormatada[0]),
      tipo: entrada.tipo,
      valor: parseFloat(entrada.valor),
    });
  }

  async getEntradaPeloId(idUser: string) {
    this.entradasService.getEntradaById(idUser).subscribe({
      next: (response: entrada) => {
        this.entradas = response;
        this.atualizarFormulario(this.entradas);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getCategorias() {
    this.categoriasService.getCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
        console.log(this.categorias);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  criarFormulario() {
    this.formEntrada = this.formBuilder.group({
      nome: ["", Validators.required],
      categoriaId: ["", Validators.required],
      pago: [true, Validators.required],
      data: [new Date(), Validators.required],
      valor: ["", Validators.required],
      tipo: ["despesa", Validators.required],
    });

    this.formEntrada.valueChanges.subscribe(() => {
      this.verificarAlteracoes();
    });
  }

  verificarAlteracoes() {
    this.algumCampoAlterado = Object.keys(this.formEntrada.controls).some(
      (campo) => this.formEntrada.get(campo)?.dirty
    );
  }

  salvarEntrada() {
    if (this.formEntrada.touched && this.algumCampoAlterado) {
      const dataFormata = dayjs(this.formEntrada.value.data).format(
        "DD/MM/YYYY"
      );

      console.log(dataFormata);

      let payload: entrada = {
        nome: this.formEntrada.value.nome,
        categoriaId: this.formEntrada.value.categoriaId,
        pago: this.formEntrada.value.pago,
        // data: this.formatarData(this.formEntrada.value.data),
        data: dataFormata,
        tipo: this.formEntrada.value.tipo,
        valor: this.formEntrada.value.valor,
      };
      if (this.idEntrada) {
        payload.id = this.idEntrada;
        this.editarEntrada(payload);
      } else {
        this.criarEntrada(payload);
      }

      console.log(payload);
    }
  }

  editarEntrada(payload: entrada) {
    this.entradasService.alterarCategoria(payload).subscribe({
      next: (response) => {
        if (response) {
          this.router.navigate(["/entradas"]);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  criarEntrada(payload: entrada) {
    this.entradasService.criarEntrada(payload).subscribe({
      next: (response) => {
        if (response) {
          this.router.navigate(["/entradas"]);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
