import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { RouterExtensions } from 'nativescript-angular/router';
import { LayoutService } from '../services/layout.services';
import { DrawerItem } from '../Models';

@Component({
  selector: 'app-drawer-container',
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.scss']
})
export class DrawerContainerComponent implements OnInit, AfterViewInit {

  private _mainContentText: string;

  // @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
  @ViewChild('drawerComponent', { static: false }) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  @Input() items: DrawerItem[] = [];
  selectedItem: string;

  constructor(
    private _changeDetectionRef: ChangeDetectorRef,
    private activeRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    public layoutService: LayoutService
  ) { }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
    this.selectedItem = this.items[0].text;
  }

  ngOnInit() {
    this.layoutService.openDrawer.subscribe(() => this.drawer.showDrawer());
  }

  get mainContentText() {
    return this._mainContentText;
  }

  set mainContentText(value: string) {
    this._mainContentText = value;
  }

  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }

  public navigateTo(link: string): void {
    this.routerExtensions.navigate([`/${link}`], { clearHistory: true, relativeTo: this.activeRoute });
    this.drawer.closeDrawer();
  }
}
