import { ActivatedRoute } from "@angular/router";
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

  constructor(
    private produtoService: ProdutoService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activedRoute.snapshot.url[1].path;

    this.activedRoute.params.subscribe((params) => {
      const idProduto = params["id"]; // 'id' é o nome do parâmetro na rota
      console.log(idProduto); // Isso imprimirá '1' no console
    });

    this.produtoService
      .getProdutoPeloId(this.id)
      .subscribe((produto: Produto) => {
        this.produto = produto;
        console.log(this.produto);
      });

    console.log(this.id);
  }
}
