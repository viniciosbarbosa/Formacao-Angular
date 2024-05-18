import { Injectable, Injector, inject } from "@angular/core";
import { Observable } from "rxjs";
import { HttpBaseService } from "src/app/shared/services/http-base.service";

@Injectable({
  providedIn: "root",
})
export class DashboardService extends HttpBaseService {
  private endpoint = "entradas";

  constructor(protected readonly inject: Injector) {
    super(inject);
  }

  getEntradas(): Observable<any> {
    return this.httpGet(this.endpoint);
  }

  getAllMounts(): Observable<any> {
    return this.httpGet("meses");
  }
}
