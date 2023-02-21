import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiliamBenjaminPage } from './liliam-benjamin.page';

const routes: Routes = [
  {
    path: '',
    component: LiliamBenjaminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiliamBenjaminPageRoutingModule {}
