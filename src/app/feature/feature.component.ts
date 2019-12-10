import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { BaseComponent } from '../base/base.component';
import { EventData } from 'tns-core-modules/ui/frame/frame';
import { ListPicker } from 'tns-core-modules/ui/list-picker';

@Component({
  selector: 'app-feature',
  moduleId: module.id,
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent extends BaseComponent implements OnInit {

  description = `Select a number from the list and click on the icon button`;
  numbers: Array<number> = [];
  selectedNumber = 1;

  constructor(
    protected routerExtensions: RouterExtensions,
    protected route: ActivatedRoute
  ) {
    super(routerExtensions, route);
  }

  ngOnInit() {
    for (let index = this.selectedNumber; index < this.selectedNumber + 10; index++) {
      this.numbers.push(index);
    }

    this.route.data.subscribe(data => {
      alert(data.message);
    });
  }

  goToItem() {
    // this.routerExtensions.navigate(['item', this.selectedNumber]);
    this.routerExtensions.navigateByUrl(`/item/${this.selectedNumber}`);
  }

  public onSelectedIndexChanged(args: EventData) {
    this.selectedNumber = this.numbers[(<ListPicker>args.object).selectedIndex];
  }

}
