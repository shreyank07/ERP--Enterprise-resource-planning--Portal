import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteprofilePageRoutingModule } from './completeprofile-routing.module';

import { CompleteprofilePage } from './completeprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteprofilePageRoutingModule
  ],
  declarations: [CompleteprofilePage]
})
export class CompleteprofilePageModule {}
