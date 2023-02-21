import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AunerPereiraCarneiroPageRoutingModule } from './auner-pereira-carneiro-routing.module';

import { AunerPereiraCarneiroPage } from './auner-pereira-carneiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AunerPereiraCarneiroPageRoutingModule
  ],
  declarations: [AunerPereiraCarneiroPage]
})
export class AunerPereiraCarneiroPageModule {}
