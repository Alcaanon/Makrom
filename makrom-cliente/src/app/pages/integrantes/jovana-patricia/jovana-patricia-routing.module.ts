import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JovanaPatriciaPage } from './jovana-patricia.page';

const routes: Routes = [
  {
    path: '',
    component: JovanaPatriciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JovanaPatriciaPageRoutingModule {}
