import { Component, OnInit } from '@angular/core';
import { DrawerItem } from './shared/Models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  modulesList: DrawerItem[] = [
    new DrawerItem({ text: 'Home', link: 'home' }),
    new DrawerItem({ text: 'Profile', link: 'profile' }),
    new DrawerItem({ text: 'Restaurants', link: 'restaurants/' }),
    new DrawerItem({ text: 'Orders', link: 'orders/' }),
    new DrawerItem({ text: 'About', link: 'about' }),
  ];
  constructor() {
    // Use the component constructor to inject services.
  }

  ngOnInit() { }
}
