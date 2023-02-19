import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  ServerId: number = 10;
  ServerStatus: string = 'offline';

  GetServerStatus() {
    return this.ServerStatus;
  }
}
