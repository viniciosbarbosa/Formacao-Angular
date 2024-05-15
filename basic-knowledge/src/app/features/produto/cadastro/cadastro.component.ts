import { ActivatedRoute, Router } from "@angular/router";
import { ProdutoService } from "./../services/produto.service";
import { Component, OnInit } from "@angular/core";
import { Produto } from "../models/produto.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"],
})
export class CadastroComponent implements OnInit {
  id!: string;
  produto!: Produto;
  rota: string = "";
  isNovoProduto: boolean = false;
  tituloPagina: string = "";

  formCadastroProduto!: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private FormBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.id = params["id"];
    });

    this.rota = this.activedRoute.snapshot.url[0].path;

    this.criarFormulario();

    if (this.rota === "editar-produto") {
      this.getProductById(this.id);
      this.tituloPagina = "Editar Produto";
    } else {
      this.isNovoProduto = true;
      this.tituloPagina = "Novo Produto";
    }

    console.log(this.tituloPagina);
  }

  criarFormulario() {
    this.formCadastroProduto = this.FormBuilder.group({
      nome: ["", Validators.required],
      descricao: ["", Validators.required],
      preco: ["", Validators.required],
      estoque: [0, Validators.required],
    });
  }

  getProductById(id: string) {
    this.produtoService.getProdutoPeloId(id).subscribe((produto: Produto) => {
      this.produto = produto;
      this.atualizarForm(produto);
    });
  }

  atualizarForm(produto: Produto) {
    this.formCadastroProduto.setValue({
      nome: [produto.nome],
      descricao: [produto.descricao],
      preco: [produto.preco],
      estoque: [produto.estoque],
    });
  }

  salvarProduto() {
    const produtoParaSalvar: Produto = {
      id: this.id,
      nome: this.formCadastroProduto.value.nome,
      descricao: this.formCadastroProduto.value.descricao,
      preco: this.formCadastroProduto.value.preco,
      estoque: this.formCadastroProduto.value.estoque,
    };

    if (this.isNovoProduto) {
      this.criarProduto(produtoParaSalvar);
    } else {
      produtoParaSalvar.imagemUrl = this.produto.imagemUrl;
      this.atualizarProduto(produtoParaSalvar);
    }
  }

  atualizarProduto(produtoParaSalvar: Produto) {
    this.produtoService.atualizarProduto(produtoParaSalvar).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(["produto/listagem"]);
      },
      error: (err) => {
        console.log("deu erro");
      },
    });
  }

  criarProduto(produtoParaSalvar: Produto) {
    this.produtoService.criarNovoProduto(produtoParaSalvar).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(["produto/listagem"]);
      },
      error: (err) => {
        console.log("deu erro");
      },
    });
  }
}
