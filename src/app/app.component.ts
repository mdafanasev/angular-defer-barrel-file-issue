import { Component } from "@angular/core";
import { OneComponent } from "./feature/one.component";
import { TwoComponent } from "./feature";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [OneComponent, TwoComponent],
  template: `
    @defer {
      <app-one />
    }
    <app-two />
  `,
  styles: [],
})
export class AppComponent {
  title = "angular-defer-barrel-file-issue";
}
