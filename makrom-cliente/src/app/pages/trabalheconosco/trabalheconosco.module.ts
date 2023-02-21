import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrabalheconoscoPageRoutingModule } from './trabalheconosco-routing.module';

import { TrabalheconoscoPage } from './trabalheconosco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrabalheconoscoPageRoutingModule
  ],
  declarations: [TrabalheconoscoPage]
})
export class TrabalheconoscoPageModule {}
