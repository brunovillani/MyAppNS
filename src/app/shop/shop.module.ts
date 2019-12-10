import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from '@src/app/shop/shop.component';
import { ShopItemComponent } from '@src/app/shop/shop-item/shop-item.component';
import { ShopSectionComponent } from '@src/app/shop/shop-section/shop-section.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [ShopComponent, ShopItemComponent, ShopSectionComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
