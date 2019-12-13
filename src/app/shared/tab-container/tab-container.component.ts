import { Component, OnInit, Input } from '@angular/core';
import { TabItem } from '../Models';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {

  @Input() tabItems: TabItem[] = [];
  @Input() position: string = 'bottom';
  constructor() { }

  ngOnInit() {
  }

}
