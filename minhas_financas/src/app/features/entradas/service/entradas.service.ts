import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { HttpBaseService } from "src/app/shared/services/http-base.service";
import { entrada } from "../models/entrada.model";

@Injectable({
  providedIn: "root",
})
export class EntradasService extends HttpBaseService {
  private endpoint = "entradas";

  constructor(protected readonly inject: Injector) {
    super(inject);
  }

  getEntradas(): Observable<any> {
    return this.httpGet(this.endpoint);
  }

  getEntradaById(id: string): Observable<any> {
    return this.httpGet(`${this.endpoint}/${id}`);
  }

  excluir(id: string): Observable<any> {
    return this.httpDelete(`${this.endpoint}/${id}`);
  }

  criarEntrada(payload: entrada): Observable<any> {
    return this.httpPost(`${this.endpoint}`, payload);
  }

  alterarCategoria(payload: entrada): Observable<any> {
    return this.httpPut(`${this.endpoint}/${payload.id}`, payload);
  }
}
