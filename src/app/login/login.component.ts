import { Component, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EventEmitter } from "@angular/core";

export class User {
  constructor(public email: string, public password: string) {}
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<User>();

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  get email() {
    return this.myForm.get("email");
  }

  get password() {
    return this.myForm.get("password");
  }

  login() {
    console.log("login ${this.myForm.value}");
    if (this.myForm.valid) {
      this.loggedIn.emit(
        new User(this.myForm.value.email, this.myForm.value.password)
      );
      console.log("loged in");
    }
  }
}
