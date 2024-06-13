import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { Injector } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { Login } from "../models/login";

describe("AuthenticationService", () => {
  let service: AuthenticationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Injector],
    });

    service = TestBed.inject(AuthenticationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should login and store the token", () => {
    const loginData: Login = { email: "test@test.com", password: "1234" };
    const mockResponse = {
      token: "fake-jwt-token",
      user: { id: 1, name: "Test User" },
    };

    service.login(loginData).subscribe((response) => {
      expect(response).toEqual(mockResponse);
      expect(sessionStorage.getItem("token")).toEqual(mockResponse.token);
    });

    const req = httpMock.expectOne("authentication");
    expect(req.request.method).toBe("POST");
    req.flush(mockResponse);
  });

  it("should logout and remove the token", () => {
    sessionStorage.setItem("token", "fake-jwt-token");

    service.sair();
    expect(sessionStorage.getItem("token")).toBeNull();
    service.usuarioEstaLogado().subscribe((isLoggedIn) => {
      expect(isLoggedIn).toBeFalse();
    });
  });

  it("should return true if user is logged in", () => {
    sessionStorage.setItem("token", "fake-jwt-token");

    service.usuarioEstaLogado().subscribe((isLoggedIn) => {
      expect(isLoggedIn).toBeTrue();
    });
  });

  it("should return false if user is not logged in", () => {
    sessionStorage.removeItem("token");

    service.usuarioEstaLogado().subscribe((isLoggedIn) => {
      expect(isLoggedIn).toBeFalse();
    });
  });

  it("should return the current user", () => {
    const mockUser = { id: 1, name: "Test User" };
    service["subjectUsuario"].next(mockUser);

    service.obterUsuario().subscribe((user) => {
      expect(user).toEqual(mockUser);
    });
  });
});
