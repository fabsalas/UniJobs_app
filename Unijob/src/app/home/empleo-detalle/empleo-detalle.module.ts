import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleoDetallePageRoutingModule } from './empleo-detalle-routing.module';

import { EmpleoDetallePage } from './empleo-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleoDetallePageRoutingModule
  ],
  declarations: [EmpleoDetallePage]
})
export class EmpleoDetallePageModule {}
