import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  title = 'MyAddress';
  constructor(
    private activeRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) { }

  ngOnInit() {
  }

  goToInfo() {
    this.routerExtensions.navigate(['../info'], { relativeTo: this.activeRoute });
  }
}
