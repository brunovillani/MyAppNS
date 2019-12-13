import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { InfoComponent } from './info/info.component';
import { AddressComponent } from './address/address.component';

export const routes: Routes = [
    { path: '', component: ProfileComponent, children: [
        { path: '', redirectTo: 'info' },
        { path: 'info', component: InfoComponent },
        { path: 'address', component: AddressComponent },
    ] },
];
