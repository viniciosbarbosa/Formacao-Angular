import { Component, Input, OnInit } from "@angular/core";
import { AuthenticationService } from "../auth/services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  @Input() menuData!: any[];

  logado: any = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioEstaLogado();
  }

  sair() {
    this.authService.sair();
    this.router.navigateByUrl("auth");
  }

  usuarioEstaLogado() {
    this.logado = this.authService.usuarioEstaLogado().subscribe({
      next: (response) => {
        this.logado = response;
        console.log(this.logado);
      },
    });
  }
}
