import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { MyFormComponent } from "./my-form/my-form.component";
import { NO_ERRORS_SCHEMA } from "@angular/compiler/src/core";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  test("check dummy 1", () => {
    const res = 2 * 3;
    expect(res).toBe(6);
  });
});
