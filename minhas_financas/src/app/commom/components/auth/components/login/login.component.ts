import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Login } from "../../models/login";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  authLogin!: Login;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  construirFormurario() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
    });
  }

  ngOnInit() {
    this.construirFormurario();
  }

  login() {
    this.authLogin = Object.assign("", this.authLogin, this.loginForm.value);

    this.authLogin.email = this.authLogin.email.toLocaleLowerCase();

    console.log(this.authLogin);

    this.authService.login(this.authLogin).subscribe({
      next: (user) => {
        if (user?.id) {
          this.router.navigateByUrl("dashboard");
        }
      },
      error: (err) => {
        this.snackBar.open(err.error.message, "", {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.loginForm.reset();
      },
    });
  }

  sair() {
    this.authService.sair();
    this.router.navigate(["auth/login"]);
  }
}
