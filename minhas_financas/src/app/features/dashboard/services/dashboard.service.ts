import { HttpClient } from "@angular/common/http";
import { Injectable, Injector, inject } from "@angular/core";
import { Observable } from "rxjs";
import { HttpBaseService } from "src/app/shared/services/http-base.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DashboardService extends HttpBaseService {
  private endpoint = "entradas";
  private endpoint2 = "http://localhost:3000/entradas";

  constructor(protected readonly inject: Injector, private http: HttpClient) {
    super(inject);
  }

  getEntradas(): Observable<any> {
    return this.httpGet(this.endpoint);
  }

  getEntradasFilter(payload: any): Observable<any[]> {
    const dataFiltered: Array<any> = [];

    return this.http.get<any[]>(`http://localhost:3000/entradas`).pipe(
      map((data) =>
        data.map((item) => {
          const [day, month, year] = item.data.split("/");

          if (month === payload.mes && year === String(payload.ano)) {
            console.log(item);

            dataFiltered.push(item);
          }

          console.log(dataFiltered);

          return dataFiltered;
        })
      )
    );
  }

  getAllMounts(): Observable<any> {
    return this.httpGet("meses");
  }

  getAllYears(): Observable<any> {
    return this.httpGet("anos");
  }
}
