import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlcileaSantosPage } from './alcilea-santos.page';

const routes: Routes = [
  {
    path: '',
    component: AlcileaSantosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlcileaSantosPageRoutingModule {}
