import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuemsomosPage } from './quemsomos.page';

const routes: Routes = [
  {
    path: '',
    component: QuemsomosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuemsomosPageRoutingModule {}
