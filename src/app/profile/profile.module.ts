import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '@src/app/profile/profile.component';
import { InfoComponent } from '@src/app/profile/info/info.component';
import { AddressComponent } from '@src/app/profile/address/address.component';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [ProfileComponent, InfoComponent, AddressComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
