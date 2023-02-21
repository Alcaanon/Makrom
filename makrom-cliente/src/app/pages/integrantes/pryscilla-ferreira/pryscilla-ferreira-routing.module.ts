import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PryscillaFerreiraPage } from './pryscilla-ferreira.page';

const routes: Routes = [
  {
    path: '',
    component: PryscillaFerreiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PryscillaFerreiraPageRoutingModule {}
