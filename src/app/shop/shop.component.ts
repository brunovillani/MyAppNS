import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent extends BaseComponent implements OnInit {

  constructor(
    protected routerExtensions: RouterExtensions,
    protected route: ActivatedRoute
  ) {
    super(routerExtensions, route);
  }

  ngOnInit() {
  }

  goToSection() {
    this.routerExtensions.navigateByUrl('/shop-section');
  }

  goToItem() {
    this.routerExtensions.navigate(['shop-item']);
  }
}
