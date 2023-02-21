import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MariaGeniAlmeidaPageRoutingModule } from './maria-geni-almeida-routing.module';

import { MariaGeniAlmeidaPage } from './maria-geni-almeida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MariaGeniAlmeidaPageRoutingModule
  ],
  declarations: [MariaGeniAlmeidaPage]
})
export class MariaGeniAlmeidaPageModule {}
