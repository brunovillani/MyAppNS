import { Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopSectionComponent } from './shop-section/shop-section.component';

export const routes: Routes = [
    { path: '', component: ShopComponent, children: [
        { path: 'shop-item', component: ShopItemComponent },
        { path: 'shop-section', component: ShopSectionComponent },
    ]}
];
