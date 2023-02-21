import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HellderBenjaminPageRoutingModule } from './hellder-benjamin-routing.module';

import { HellderBenjaminPage } from './hellder-benjamin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HellderBenjaminPageRoutingModule
  ],
  declarations: [HellderBenjaminPage]
})
export class HellderBenjaminPageModule {}
