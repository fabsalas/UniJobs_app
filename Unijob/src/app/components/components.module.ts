import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav/nav.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports: [
    NavComponent
  ]
})
export class ComponentsModule { }
