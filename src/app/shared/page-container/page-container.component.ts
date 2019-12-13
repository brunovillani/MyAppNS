import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from '../services/layout.services';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {

  @Input() title: string;
  @Input() hideActionBar = false;
  constructor(
    public layoutService: LayoutService,
    public page: Page
  ) { }

  ngOnInit() {
    this.page.actionBarHidden = this.hideActionBar;
  }

  onDrawerButtonTap(): void {
    this.layoutService.openDrawer.next();
  }

}
