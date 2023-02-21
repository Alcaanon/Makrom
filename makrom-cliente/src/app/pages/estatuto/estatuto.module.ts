import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstatutoPageRoutingModule } from './estatuto-routing.module';

import { EstatutoPage } from './estatuto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstatutoPageRoutingModule
  ],
  declarations: [EstatutoPage]
})
export class EstatutoPageModule {}
