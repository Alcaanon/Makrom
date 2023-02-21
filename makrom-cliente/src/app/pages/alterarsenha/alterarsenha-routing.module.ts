import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarsenhaPage } from './alterarsenha.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarsenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarsenhaPageRoutingModule {}
