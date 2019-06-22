import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MyFormComponent } from "./my-form.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { AppComponent } from "../app.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

describe("MyFormComponent", () => {
  let component: MyFormComponent;
  let fixture: ComponentFixture<MyFormComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [MyFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    // debugElement = fixture.debugElement.query(By.css("p"));
    // htmlElement = debugElement.nativeElement;
  });

  test("check dummy", () => {
    const res = 2 * 3;
    expect(res).toBe(6);
  });
});
