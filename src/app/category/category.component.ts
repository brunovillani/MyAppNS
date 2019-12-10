import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-category',
  moduleId: module.id,
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent extends BaseComponent implements OnInit {

  description = `  This is the category page. The item navigation call 'navigate' inside the component.
  Going back will take you to browse page.
  `;

  constructor(
    protected routerExtensions: RouterExtensions,
    protected route: ActivatedRoute
  ) {
    super(routerExtensions, route);
  }

  ngOnInit() {
  }

  goToItem() {
    this.routerExtensions.navigate(['item']);
  }
}
