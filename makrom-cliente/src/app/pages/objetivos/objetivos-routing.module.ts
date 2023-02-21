import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjetivosPage } from './objetivos.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjetivosPageRoutingModule {}
