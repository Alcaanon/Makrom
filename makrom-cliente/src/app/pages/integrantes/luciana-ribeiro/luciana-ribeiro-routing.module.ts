import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LucianaRibeiroPage } from './luciana-ribeiro.page';

const routes: Routes = [
  {
    path: '',
    component: LucianaRibeiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LucianaRibeiroPageRoutingModule {}
