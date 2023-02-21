import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HellderBenjaminPage } from './hellder-benjamin.page';

const routes: Routes = [
  {
    path: '',
    component: HellderBenjaminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HellderBenjaminPageRoutingModule {}
