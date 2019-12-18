import { Component, OnInit } from '@angular/core';
import * as Kinvey from 'kinvey-nativescript-sdk/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title = 'MyAbout';
  pinging = false;
  pingResponse: string;
  constructor(private pingService: Kinvey.PingService) { }

  ngOnInit() {
  }

  pingKinvey() {
    this.pinging = true;
    this.ping();
  }

  private async ping() {
    this.pingingTimeout();
    this.pingResponse = 'pinging';
    try {
      const response = await this.pingService.ping();
      this.pingResponse = `Kinvey Ping Success. Kinvey Service is alive, version: ${response.version}, response: ${response.kinvey}`;
      this.pinging = false;
    } catch (error) {
      this.pingResponse = `Kinvey Ping Failed. Response: ${error.description}`;
      this.pinging = false;
    }
  }

  private pingingTimeout() {
    setTimeout(() => {
      if (this.pinging === true) {
        this.pingResponse = this.pingResponse.length === 10 ? 'pinging' : `${this.pingResponse}.`;
        this.pingingTimeout();
      }
    }, 1000);
  }
}
