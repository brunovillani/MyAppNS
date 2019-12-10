import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { HubComponent } from '@src/app/hub/hub.component';
import { FeatureComponent } from '@src/app/feature/feature.component';
import { BrowseComponent } from '@src/app/browse/browse.component';
import { SearchComponent } from '@src/app/search/search.component';
import { BaseComponent } from '@src/app/base/base.component';
import { CategoryComponent } from '@src/app/category/category.component';
import { ItemComponent } from '@src/app/item/item.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HubComponent,
    FeatureComponent,
    BrowseComponent,
    SearchComponent,
    BaseComponent,
    CategoryComponent,
    ItemComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
