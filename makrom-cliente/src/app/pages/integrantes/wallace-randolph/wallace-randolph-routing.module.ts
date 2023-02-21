import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WallaceRandolphPage } from './wallace-randolph.page';

const routes: Routes = [
  {
    path: '',
    component: WallaceRandolphPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WallaceRandolphPageRoutingModule {}
