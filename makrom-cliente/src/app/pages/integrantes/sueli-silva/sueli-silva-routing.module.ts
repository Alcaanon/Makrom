import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SueliSilvaPage } from './sueli-silva.page';

const routes: Routes = [
  {
    path: '',
    component: SueliSilvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SueliSilvaPageRoutingModule {}
