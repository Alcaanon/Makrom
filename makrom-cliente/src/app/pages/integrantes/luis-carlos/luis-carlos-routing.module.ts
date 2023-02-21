import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuisCarlosPage } from './luis-carlos.page';

const routes: Routes = [
  {
    path: '',
    component: LuisCarlosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuisCarlosPageRoutingModule {}
