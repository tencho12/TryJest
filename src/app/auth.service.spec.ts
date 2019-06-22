import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });
  afterEach(() => {
    service = null;
    localStorage.removeItem("token");
  });

  test("should return true from isAuthenticated when there is a token", () => {
    localStorage.setItem("token", "12345");
    expect(service.isAuthenticated()).toBeTruthy();
  });

  test("should return false from isAuthenticated when there is no token", () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });
});
