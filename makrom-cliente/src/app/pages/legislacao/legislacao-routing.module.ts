import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegislacaoPage } from './legislacao.page';

const routes: Routes = [
  {
    path: '',
    component: LegislacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegislacaoPageRoutingModule {}
