import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleoDetallePage } from './empleo-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleoDetallePageRoutingModule {}
