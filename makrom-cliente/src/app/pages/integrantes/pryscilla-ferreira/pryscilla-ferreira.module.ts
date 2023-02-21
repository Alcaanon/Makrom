import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PryscillaFerreiraPageRoutingModule } from './pryscilla-ferreira-routing.module';

import { PryscillaFerreiraPage } from './pryscilla-ferreira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PryscillaFerreiraPageRoutingModule
  ],
  declarations: [PryscillaFerreiraPage]
})
export class PryscillaFerreiraPageModule {}
