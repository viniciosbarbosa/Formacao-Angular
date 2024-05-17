import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { HttpBaseService } from "src/app/shared/services/http-base.service";

@Injectable({
  providedIn: "root",
})
export class CategoriasService extends HttpBaseService {
  private endpoint = "categorias";

  constructor(protected readonly inject: Injector) {
    super(inject);
  }

  getCategorias(): Observable<any> {
    return this.httpGet(this.endpoint);
  }

  getCategoriaById(id: string): Observable<any> {
    return this.httpGet(`${this.endpoint}/${id}`);
  }
}
