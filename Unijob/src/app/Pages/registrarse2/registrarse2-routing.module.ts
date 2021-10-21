import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrarse2Page } from './registrarse2.page';

const routes: Routes = [
  {
    path: '',
    component: Registrarse2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrarse2PageRoutingModule {}
