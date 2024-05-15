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

  atualizarProduto(produto: Produto): Observable<any> {
    return this.http.put<any>(`${this.appUrl}/produtos/${produto.id}`, produto);
  }

  criarNovoProduto(produto: Produto): Observable<any> {
    return this.http.post<any>(`${this.appUrl}/produtos`, produto);
  }

  excluirProduto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.appUrl}/produtos/${id}`);
  }
}
