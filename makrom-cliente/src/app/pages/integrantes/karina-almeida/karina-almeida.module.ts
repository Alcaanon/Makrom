import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KarinaAlmeidaPageRoutingModule } from './karina-almeida-routing.module';

import { KarinaAlmeidaPage } from './karina-almeida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KarinaAlmeidaPageRoutingModule
  ],
  declarations: [KarinaAlmeidaPage]
})
export class KarinaAlmeidaPageModule {}
