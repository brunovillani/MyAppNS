import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  moduleId: module.id,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends BaseComponent implements OnInit {

  description = `  This is the search page.
  Going back will take you to hub page.
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
