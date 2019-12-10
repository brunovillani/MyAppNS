import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { alert } from 'tns-core-modules/ui/dialogs';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-item',
  moduleId: module.id,
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent extends BaseComponent implements OnInit {

  description = `This is the item page. If you're reading this it's because no parameter was passed through the route`;

  constructor(
    protected routerExtensions: RouterExtensions,
    protected route: ActivatedRoute
  ) {
    super(routerExtensions, route);
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      alert(data.message);
    });
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (!isNaN(id)) {
        this.description = `This is the item page. The value passed by route is ${id}`;
      }
  });
  }

}
