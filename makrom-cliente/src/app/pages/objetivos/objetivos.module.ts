import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetivosPageRoutingModule } from './objetivos-routing.module';

import { ObjetivosPage } from './objetivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetivosPageRoutingModule
  ],
  declarations: [ObjetivosPage]
})
export class ObjetivosPageModule {}
