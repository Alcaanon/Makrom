import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicacoesPage } from './publicacoes.page';

const routes: Routes = [
  {
    path: '',
    component: PublicacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicacoesPageRoutingModule {}
