import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "../services/produto.service";
import { Produto, Produtos } from "../models/produto.model";

@Component({
  selector: "app-listagem",
  templateUrl: "./listagem.component.html",
  styleUrls: ["./listagem.component.scss"],
})
export class ListagemComponent implements OnInit {
  constructor(private produtoService: ProdutoService, private router: Router) {}

  produtos!: Produtos;

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
      console.log(this.produtos);
    });
  }

  selecionarProduto(produto: Produto) {
    console.log(produto);

    this.router.navigate(["produto/editar-produto", produto.id]);
  }

  criarNovoProduto() {
    this.router.navigate(["produto/novo-produto"]);
  }

  deleteProduto(produto: Produto) {
    this.produtoService.excluirProduto(produto.id).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(["produto/listagem"]);
      },
      error: (err) => {
        console.log("deu erro ao excluir");
      },
    });
  }
}
