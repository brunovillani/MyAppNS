import { NgModule } from '@angular/core';
import { routes } from './shop.routes';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule { }
