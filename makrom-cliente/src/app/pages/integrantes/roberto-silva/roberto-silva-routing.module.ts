import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RobertoSilvaPage } from './roberto-silva.page';

const routes: Routes = [
  {
    path: '',
    component: RobertoSilvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RobertoSilvaPageRoutingModule {}
