import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoselyOliveiraPage } from './josely-oliveira.page';

const routes: Routes = [
  {
    path: '',
    component: JoselyOliveiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoselyOliveiraPageRoutingModule {}
