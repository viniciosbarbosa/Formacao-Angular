import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { HttpBaseService } from "src/app/shared/services/http-base.service";

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
}
