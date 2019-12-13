import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule)},
  { path: 'restaurants', loadChildren: () => import('./restaurants/restaurants.module').then((m) => m.RestaurantsModule)},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule)},
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/home' }
];
