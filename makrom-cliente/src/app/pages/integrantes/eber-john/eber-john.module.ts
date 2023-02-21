import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EberJohnPageRoutingModule } from './eber-john-routing.module';

import { EberJohnPage } from './eber-john.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EberJohnPageRoutingModule
  ],
  declarations: [EberJohnPage]
})
export class EberJohnPageModule {}
