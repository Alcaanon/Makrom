import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VandaMariaPageRoutingModule } from './vanda-maria-routing.module';

import { VandaMariaPage } from './vanda-maria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VandaMariaPageRoutingModule
  ],
  declarations: [VandaMariaPage]
})
export class VandaMariaPageModule {}
