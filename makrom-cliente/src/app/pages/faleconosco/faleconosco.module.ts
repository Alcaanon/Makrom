import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaleconoscoPageRoutingModule } from './faleconosco-routing.module';

import { FaleconoscoPage } from './faleconosco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaleconoscoPageRoutingModule
  ],
  declarations: [FaleconoscoPage]
})
export class FaleconoscoPageModule {}
