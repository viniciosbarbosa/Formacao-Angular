import { Injectable, Injector } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { HttpBaseService } from "src/app/shared/services/http-base.service";
import { Login } from "../models/login";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService extends HttpBaseService {
  private subjectUsuario: BehaviorSubject<any> = new BehaviorSubject(null);
  private subjectLogin: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(protected readonly inject: Injector) {
    super(inject);
  }

  login(params: Login): Observable<any> {
    return this.httpPost("authentication", params).pipe(
      map((resposta) => {
        sessionStorage.setItem("token", resposta.token);
        this.subjectUsuario.next(resposta.user);
        this.subjectLogin.next(true);

        return resposta;
      })
    );
  }

  sair() {
    sessionStorage.removeItem("token");
    this.subjectUsuario.next(null);
    this.subjectLogin.next(false);
  }

  usuarioEstaLogado(): Observable<boolean> {
    const token = sessionStorage.getItem("token");
    if (token) {
      this.subjectLogin.next(true);
    }

    return this.subjectLogin.asObservable();
  }

  obterUsuario() {
    this.subjectUsuario.asObservable();
  }
}
