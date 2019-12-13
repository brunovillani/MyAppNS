import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { RestaurantsComponent } from '@src/app/restaurants/restaurants.component';



@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RestaurantsModule { }
