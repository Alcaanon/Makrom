import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeusimarHoraPageRoutingModule } from './neusimar-hora-routing.module';

import { NeusimarHoraPage } from './neusimar-hora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeusimarHoraPageRoutingModule
  ],
  declarations: [NeusimarHoraPage]
})
export class NeusimarHoraPageModule {}
