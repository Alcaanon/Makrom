import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcoAurelioDutraPage } from './marco-aurelio-dutra.page';

const routes: Routes = [
  {
    path: '',
    component: MarcoAurelioDutraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcoAurelioDutraPageRoutingModule {}
