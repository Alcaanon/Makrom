import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarioTerraFilhoPageRoutingModule } from './mario-terra-filho-routing.module';

import { MarioTerraFilhoPage } from './mario-terra-filho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarioTerraFilhoPageRoutingModule
  ],
  declarations: [MarioTerraFilhoPage]
})
export class MarioTerraFilhoPageModule {}
