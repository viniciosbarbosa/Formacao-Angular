import { Injectable, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpBaseService } from "src/app/shared/services/http-base.service";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService extends HttpBaseService {
  private subjectUsuario: BehaviorSubject<any> = new BehaviorSubject(null);
  private subjectLogin: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(protected readonly inject: Injector) {
    super(inject);
  }
}
