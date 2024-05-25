import { Injectable } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthenticationService } from "./auth/services/authentication.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const url = state.url;

    return this.authService.usuarioEstaLogado().pipe(
      tap((user) => {
        if (!user) {
          this.router.navigate(["auth/login"]);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
