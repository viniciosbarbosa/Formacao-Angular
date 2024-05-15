import { ActivatedRoute, Router } from "@angular/router";
import { ProdutoService } from "./../services/produto.service";
import { Component, OnInit } from "@angular/core";
import { Produto } from "../models/produto.model";

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

  nome: string = "";
  descricao: string = "";
  preco: string = "";
  estoque: number = 0;

  constructor(
    private produtoService: ProdutoService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.id = params["id"];
    });

    this.rota = this.activedRoute.snapshot.url[0].path;

    if (this.rota === "editar-produto") {
      this.getProductById(this.id);
      this.tituloPagina = `Editar Produto`;
    } else {
      this.isNovoProduto = true;
      this.tituloPagina = "Novo Produto";
    }

    console.log(this.tituloPagina);
  }

  getProductById(id: string) {
    this.produtoService.getProdutoPeloId(id).subscribe((produto: Produto) => {
      this.produto = produto;

      //mt ruim isso
      this.nome = produto.nome;
      this.descricao = produto.descricao;
      this.preco = produto.preco;
      this.estoque = produto.estoque;
    });
  }

  salvarProduto() {
    const produtoParaSalvar: Produto = {
      id: this.id,
      nome: this.nome,
      descricao: this.descricao,
      preco: this.preco,
      estoque: this.estoque,
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
