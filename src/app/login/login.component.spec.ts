import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent, User } from "./login.component";
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;

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
    // fixture.detectChanges();

    submitEl = fixture.debugElement.query(By.css("button"));
    loginEl = fixture.debugElement.query(By.css("input[type=email]"));
    passwordEl = fixture.debugElement.query(By.css("input[type=password]"));
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

    //uncomment this after uncommenting the login function in .ts file
    // let user: User;
    // component.loggedIn.subscribe(value => (user = value));

    // component.login();

    // expect(user.email).toBe("ten@gmail.com");
    // expect(user.password).toBe("23456789");
  });

  //testing input
  test("Setting enabled to false disables the submit button", () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });

  //testing output
  test("Entering email and password emits loggedIn event", () => {
    let user: User;

    loginEl.nativeElement.value = "ten@gmail.com";
    passwordEl.nativeElement.value = "23456789";

    component.loggedIn.subscribe(value => (user = value));

    submitEl.triggerEventHandler("click", null);

    expect(user.email).toBe("ten@gmail.com");
    expect(user.password).toBe("23456789");
  });
});
