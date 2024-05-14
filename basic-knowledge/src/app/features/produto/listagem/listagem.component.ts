import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "../services/produto.service";

@Component({
  selector: "app-listagem",
  templateUrl: "./listagem.component.html",
  styleUrls: ["./listagem.component.scss"],
})
export class ListagemComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  //RX JS
  ngOnInit(): void {
    this.produtoService.getCidadePelo().subscribe((data) => {
      console.log(data);
    });
  }
}
