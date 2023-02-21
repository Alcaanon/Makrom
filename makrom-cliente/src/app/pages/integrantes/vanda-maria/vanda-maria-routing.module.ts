import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VandaMariaPage } from './vanda-maria.page';

const routes: Routes = [
  {
    path: '',
    component: VandaMariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VandaMariaPageRoutingModule {}
