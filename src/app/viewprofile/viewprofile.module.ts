import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NavbarAComponent } from '../navbar-a/navbar-a.component';
import { ViewprofilePageRoutingModule } from './viewprofile-routing.module';
import {FooterComponent} from '../footer/footer.component';
import { ViewprofilePage } from './viewprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewprofilePageRoutingModule
  ],
  declarations: [ViewprofilePage,NavbarAComponent,FooterComponent]
})
export class ViewprofilePageModule {}
