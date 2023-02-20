import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // styles: [
  //   `
  //     p {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'my-first-app';
  showSecret = false;
  // log: number[] = [];
  log: Date[] = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
