import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WallaceRandolphPageRoutingModule } from './wallace-randolph-routing.module';

import { WallaceRandolphPage } from './wallace-randolph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WallaceRandolphPageRoutingModule
  ],
  declarations: [WallaceRandolphPage]
})
export class WallaceRandolphPageModule {}
