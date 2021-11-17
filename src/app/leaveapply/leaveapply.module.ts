import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveapplyPageRoutingModule } from './leaveapply-routing.module';
import { NavbarFComponent } from '../navbar-f/navbar-f.component';
import {FooterComponent} from '../footer/footer.component';
import { LeaveapplyPage } from './leaveapply.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveapplyPageRoutingModule
  ],
  declarations: [LeaveapplyPage,NavbarFComponent,FooterComponent]
})
export class LeaveapplyPageModule {}
