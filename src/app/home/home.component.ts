import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../shared/services/layout.services';
import { TabItem } from '../shared/Models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'MyHome';

  tabItems: TabItem[] = [
    { text: 'home1' },
    { text: 'home2' },
    { text: 'home3' },
  ];
  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
  }
}
