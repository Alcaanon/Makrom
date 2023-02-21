import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FelipeGodoyPage } from './felipe-godoy.page';

const routes: Routes = [
  {
    path: '',
    component: FelipeGodoyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FelipeGodoyPageRoutingModule {}
