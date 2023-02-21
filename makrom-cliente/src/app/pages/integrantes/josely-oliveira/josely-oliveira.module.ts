import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoselyOliveiraPageRoutingModule } from './josely-oliveira-routing.module';

import { JoselyOliveiraPage } from './josely-oliveira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoselyOliveiraPageRoutingModule
  ],
  declarations: [JoselyOliveiraPage]
})
export class JoselyOliveiraPageModule {}
