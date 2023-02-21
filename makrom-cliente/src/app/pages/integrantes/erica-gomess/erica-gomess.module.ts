import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EricaGomessPageRoutingModule } from './erica-gomess-routing.module';

import { EricaGomessPage } from './erica-gomess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EricaGomessPageRoutingModule
  ],
  declarations: [EricaGomessPage]
})
export class EricaGomessPageModule {}
