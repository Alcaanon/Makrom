import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LucianaRibeiroPageRoutingModule } from './luciana-ribeiro-routing.module';

import { LucianaRibeiroPage } from './luciana-ribeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LucianaRibeiroPageRoutingModule
  ],
  declarations: [LucianaRibeiroPage]
})
export class LucianaRibeiroPageModule {}
