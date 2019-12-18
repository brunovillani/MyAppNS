import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptSvgModule } from 'nativescript-svg/angular';
import { DrawerContainerComponent } from '@src/app/shared/drawer-container/drawer-container.component';


@NgModule({
  declarations: [DrawerContainerComponent],
  imports: [
    CommonModule,
    NativeScriptSvgModule
  ],
  exports: [
    NativeScriptSvgModule
  ]
})
export class SharedModule { }
