import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  //Injecao de dependencias

  private baseUrl = "https://viacep.com.br/ws/01001000/json/";

  constructor(private http: HttpClient) {}

  getCidadePelo() {
    return this.http.get(`this.baseUrl`);
  }
}
