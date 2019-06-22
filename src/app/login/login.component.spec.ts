import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent, User } from "./login.component";
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [LoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  test("form invalid if empty", () => {
    expect(component.myForm.valid).toBeFalsy();
  });

  test("email field validity", () => {
    let email = component.myForm.controls["email"];
    expect(email.valid).toBeFalsy();

    let errors: {};
    errors = email.errors || {};

    expect(errors["required"]).toBeTruthy();

    // email.setValue("test");
    // errors = email.errors || {};
    // expect(errors["pattern"]).toBeTruthy();
  });

  test("subbmitting a form emits a user", () => {
    expect(component.myForm.valid).toBeFalsy();
    component.myForm.controls["email"].setValue("ten@gmail.com");
    component.myForm.controls["password"].setValue("23456789");
    expect(component.myForm.valid).toBeTruthy();

    let user: User;
    component.loggedIn.subscribe(value => (user = value));

    component.login();

    expect(user.email).toBe("ten@gmail.com");
    expect(user.password).toBe("23456789");
  });
});
