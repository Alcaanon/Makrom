import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EricaGomesPageRoutingModule } from './erica-gomes-routing.module';

import { EricaGomesPage } from './erica-gomes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EricaGomesPageRoutingModule
  ],
  declarations: [EricaGomesPage]
})
export class EricaGomesPageModule {}
