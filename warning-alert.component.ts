import { Component } from "@angular/core";

@Component({
  selector: 'app-warning-alert',
  template: ` <p>This is a warning. ALERT!!!!!!</p> `,
  styles: [
    `
      p{
        background-color: mistyrose;
        color: red;
      }
    `
  ]
})
export class WarningAlertComponent {

}
