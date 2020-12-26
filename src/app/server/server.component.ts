import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName: string = 'Testserver';
  serverCreated: boolean = false;

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
