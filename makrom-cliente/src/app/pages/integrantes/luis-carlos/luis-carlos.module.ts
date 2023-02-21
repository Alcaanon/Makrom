import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuisCarlosPageRoutingModule } from './luis-carlos-routing.module';

import { LuisCarlosPage } from './luis-carlos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuisCarlosPageRoutingModule
  ],
  declarations: [LuisCarlosPage]
})
export class LuisCarlosPageModule {}
