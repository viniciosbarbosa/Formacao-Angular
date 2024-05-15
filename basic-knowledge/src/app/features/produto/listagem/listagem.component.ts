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
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
      console.log(this.produtos);
    });
  }

  selecionarProduto(produto: Produto) {
    this.router.navigate(["produto/editar-produto", produto.id]);
  }
}
