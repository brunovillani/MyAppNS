import { Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants.component';

export const routes: Routes = [
    { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
    { path: 'restaurants', component: RestaurantsComponent },
];
