import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { LayoutService } from '@src/app/shared/services/layout.services';
import { PageContainerComponent } from '@src/app/shared/page-container/page-container.component';
import { TabContainerComponent } from '@src/app/shared/tab-container/tab-container.component';
import { DrawerContainerComponent } from '@src/app/shared/drawer-container/drawer-container.component';

@NgModule({
  declarations: [
    PageContainerComponent,
    TabContainerComponent,
    DrawerContainerComponent,
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptUISideDrawerModule
  ],
  exports: [
    PageContainerComponent,
    TabContainerComponent,
    DrawerContainerComponent,
    NativeScriptCommonModule,
    NativeScriptUISideDrawerModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {
  static forRoot(): any[] | import('@angular/core').Type<any> | import('@angular/core').ModuleWithProviders<{}> {
    return {
      ngModule: SharedModule,
      providers: [LayoutService]
    };
  }
}
