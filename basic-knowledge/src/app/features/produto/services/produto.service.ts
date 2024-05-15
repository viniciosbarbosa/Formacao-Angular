import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto, Produtos } from "../models/produto.model";

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  //Injecao de dependencias

  private appUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produtos> {
    return this.http.get<Produtos>(`${this.appUrl}/produtos`);
  }

  getProdutoPeloId(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.appUrl}/produtos/${id}`);
  }
}
