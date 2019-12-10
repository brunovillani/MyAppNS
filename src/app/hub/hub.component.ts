import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-hub',
  moduleId: module.id,
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {

  description = `  This is the hub page. From here we can navigate to other pages by changing the route.
  These buttons call a [nsRouterLink] property passing the router elements.
  `;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

}
