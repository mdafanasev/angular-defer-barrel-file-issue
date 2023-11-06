import { Component } from "@angular/core";
import { OneComponent, TwoComponent } from "./feature";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [OneComponent, TwoComponent],
  template: `<app-one /><app-two />`,
  styles: [],
})
export class AppComponent {
  title = "angular-defer-barrel-file-issue";
}
