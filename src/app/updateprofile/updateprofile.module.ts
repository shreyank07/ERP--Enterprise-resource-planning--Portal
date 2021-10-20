import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateprofilePageRoutingModule } from './updateprofile-routing.module';
import { NavbarFComponent } from '../navbar-f/navbar-f.component';
import { UpdateprofilePage } from './updateprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateprofilePageRoutingModule
  ],
  declarations: [UpdateprofilePage,NavbarFComponent]
})
export class UpdateprofilePageModule {}
