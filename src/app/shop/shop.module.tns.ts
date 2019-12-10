import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ShopComponent } from '@src/app/shop/shop.component';
import { ShopItemComponent } from '@src/app/shop/shop-item/shop-item.component';
import { ShopSectionComponent } from '@src/app/shop/shop-section/shop-section.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [ShopComponent, ShopItemComponent, ShopSectionComponent],
  imports: [
    NativeScriptCommonModule,
    ShopRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ShopModule { }
