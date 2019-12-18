import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { AboutComponent } from '@src/app/about/about.component';
import { SharedModule } from './shared/shared.module.tns';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

import { KinveyModule } from 'kinvey-nativescript-sdk/angular';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    KinveyModule.init({
      appKey: 'kid_ry_Pqz7TB',
      appSecret: '5e7fe51769c3493d8b6aaf3080abfa4c',
      instanceId: 'cnr-us1'
    })
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
