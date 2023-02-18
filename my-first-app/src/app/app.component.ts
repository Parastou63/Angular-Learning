import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  title = 'my-first-app';
}
