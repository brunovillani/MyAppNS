import { Routes } from '@angular/router';

import { HubComponent } from './hub/hub.component';
import { FeatureComponent } from './feature/feature.component';
import { BrowseComponent } from './browse/browse.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';

export const routes: Routes = [
  { path: '', redirectTo: '/hub', pathMatch: 'full' },
  { path: 'hub', component: HubComponent },
  { path: 'feature', component: FeatureComponent, data: { message: 'featureRoute' } },
  { path: 'browse', component: BrowseComponent },
  { path: 'search', component: SearchComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'item', component: ItemComponent, data: { message: 'hubRoute and no parameter' } },
  { path: 'item/:id', component: ItemComponent, data: { message: 'hubRoute with parameter' } },
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
];
