import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  title = 'MyProfile';
  constructor(
    private activeRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) { }

  ngOnInit() {
  }

  toInfo() {
    this.routerExtensions.navigate([{ outlets: { profileOutlet: ['info']}}]);
  }

  toAddress() {
    this.routerExtensions.navigate(['address'], { relativeTo: this.activeRoute });
  }

}
