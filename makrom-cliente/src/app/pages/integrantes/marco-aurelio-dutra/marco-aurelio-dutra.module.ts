import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcoAurelioDutraPageRoutingModule } from './marco-aurelio-dutra-routing.module';

import { MarcoAurelioDutraPage } from './marco-aurelio-dutra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcoAurelioDutraPageRoutingModule
  ],
  declarations: [MarcoAurelioDutraPage]
})
export class MarcoAurelioDutraPageModule {}
