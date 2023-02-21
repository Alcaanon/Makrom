import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamilAlbertoPage } from './samil-alberto.page';

const routes: Routes = [
  {
    path: '',
    component: SamilAlbertoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamilAlbertoPageRoutingModule {}
