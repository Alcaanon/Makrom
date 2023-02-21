import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VantagensPage } from './vantagens.page';

const routes: Routes = [
  {
    path: '',
    component: VantagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VantagensPageRoutingModule {}
