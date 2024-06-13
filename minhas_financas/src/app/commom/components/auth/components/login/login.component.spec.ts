import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { of, throwError } from "rxjs";
import { LoginComponent } from "./login.component";
import { AuthenticationService } from "../../services/authentication.service";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceMock: any;
  let routerMock: any;
  let snackBarMock: any;

  beforeEach(async () => {
    authServiceMock = jasmine.createSpyObj("AuthenticationService", [
      "login",
      "sair",
    ]);
    routerMock = jasmine.createSpyObj("Router", ["navigateByUrl", "navigate"]);
    snackBarMock = jasmine.createSpyObj("MatSnackBar", ["open"]);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: AuthenticationService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: MatSnackBar, useValue: snackBarMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create the form with email and password controls", () => {
    expect(component.loginForm.contains("email")).toBeTruthy();
    expect(component.loginForm.contains("password")).toBeTruthy();
  });

  it("should make the email control required", () => {
    const control = component.loginForm.get("email");
    if (control) {
      control.setValue("");
      expect(control.valid).toBeFalsy();
    } else {
      fail("Email control should exist in the form");
    }
  });

  it("should make the email control required", () => {
    const control = component.loginForm.get("password");
    if (control) {
      control.setValue("");
      expect(control.valid).toBeFalsy();
    } else {
      fail("Password control should exist in the form");
    }
  });

  it("should call the login method of authService when login is called", () => {
    const loginSpy = authServiceMock.login.and.returnValue(
      of({ user: { id: 1 } })
    );
    component.loginForm.setValue({ email: "test@test.com", password: "1234" });

    component.login();

    expect(loginSpy).toHaveBeenCalledWith({
      email: "test@test.com",
      password: "1234",
    });
    expect(routerMock.navigateByUrl).toHaveBeenCalledWith("dashboard");
  });

  it("should show error message on login failure", () => {
    const errorResponse = { error: { messagem: "Invalid credentials" } };
    authServiceMock.login.and.returnValue(throwError(errorResponse));
    component.loginForm.setValue({ email: "test@test.com", password: "1234" });

    component.login();

    expect(snackBarMock.open).toHaveBeenCalledWith("Invalid credentials", "", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });

    const emailControl = component.loginForm.get("email");
    const passwordControl = component.loginForm.get("password");

    if (emailControl && passwordControl) {
      expect(emailControl.value).toBe("");
      expect(passwordControl.value).toBe("");
    } else {
      fail("Email and Password controls should exist in the form");
    }
  });

  it("should call the sair method of authService when sair is called", () => {
    component.sair();
    expect(authServiceMock.sair).toHaveBeenCalled();
    expect(routerMock.navigate).toHaveBeenCalledWith(["auth/login"]);
  });
});
