import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
