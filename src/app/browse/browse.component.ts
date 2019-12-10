import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-browse',
  moduleId: module.id,
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent extends BaseComponent implements OnInit {

  description = `  This is the browse page. From here we can navigate to category pages or go back to the hub page.
  `;

  constructor(
    protected routerExtensions: RouterExtensions,
    protected route: ActivatedRoute
  ) {
    super(routerExtensions, route);
  }

  ngOnInit() {
  }

}
