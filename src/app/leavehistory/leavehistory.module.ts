import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NavbarFComponent } from '../navbar-f/navbar-f.component';
import { LeavehistoryPageRoutingModule } from './leavehistory-routing.module';
import {FooterComponent} from '../footer/footer.component';
import { LeavehistoryPage } from './leavehistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeavehistoryPageRoutingModule
  ],
  declarations: [LeavehistoryPage,NavbarFComponent,FooterComponent]
})
export class LeavehistoryPageModule {}
