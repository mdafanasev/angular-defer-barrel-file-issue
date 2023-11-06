import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-one",
  standalone: true,
  imports: [CommonModule],
  template: `<p>one works!</p>`,
  styles: ``,
})
export class OneComponent {}
