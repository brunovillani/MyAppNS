import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ProfileComponent } from '@src/app/profile/profile.component';
import { InfoComponent } from '@src/app/profile/info/info.component';
import { AddressComponent } from '@src/app/profile/address/address.component';
import { SharedModule } from '../shared/shared.module.tns';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [ProfileComponent, InfoComponent, AddressComponent],
  imports: [
    NativeScriptCommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileModule { }
