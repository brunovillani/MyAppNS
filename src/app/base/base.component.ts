import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-base',
  template: './base.component.html'
})
export class BaseComponent implements OnInit {

  constructor(
    protected routerExtensions: RouterExtensions,
    protected route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.routerExtensions.back();
  }

}
