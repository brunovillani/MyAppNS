import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  title = 'MyInfo';
  constructor(
    private activeRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) { }

  ngOnInit() {
  }

  goToAddress() {
    this.routerExtensions.navigate(['../address'], { relativeTo: this.activeRoute });
  }
}
