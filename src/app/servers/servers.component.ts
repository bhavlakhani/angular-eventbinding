import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId = 1;
  serverStatus= "online";
  constructor() { }

  ngOnInit() {
  }

  getServerStatus(){
    return this.serverStatus;
  }

}
