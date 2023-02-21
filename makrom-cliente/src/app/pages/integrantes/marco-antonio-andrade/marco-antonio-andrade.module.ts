import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcoAntonioAndradePageRoutingModule } from './marco-antonio-andrade-routing.module';

import { MarcoAntonioAndradePage } from './marco-antonio-andrade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcoAntonioAndradePageRoutingModule
  ],
  declarations: [MarcoAntonioAndradePage]
})
export class MarcoAntonioAndradePageModule {}
