import { Component, OnInit, NgModule } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-my-form",
  templateUrl: "./my-form.component.html",
  styleUrls: ["./my-form.component.css"]
})
export class MyFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required
          // Validators.pattern('') put patter of the password if any
        ]
      ],
      age: [
        null,
        [
          Validators.required,
          Validators.minLength(2), //number of characters in string
          Validators.min(18),
          Validators.max(65)
        ]
      ],
      agree: [false, [Validators.requiredTrue]]
    });
  }

  get email() {
    return this.myForm.get("email");
  }

  get password() {
    return this.myForm.get("password");
  }
  get age() {
    return this.myForm.get("age");
  }
  get agree() {
    return this.myForm.get("agree");
  }
  sendMessage() {
    console.log("message sent");
  }
}
