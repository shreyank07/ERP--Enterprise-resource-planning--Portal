import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NavbarAComponent } from '../navbar-a/navbar-a.component';
import { ViewleavesPageRoutingModule } from './viewleaves-routing.module';
import {FooterComponent} from '../footer/footer.component';
import { ViewleavesPage } from './viewleaves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewleavesPageRoutingModule
  ],
  declarations: [ViewleavesPage,NavbarAComponent,FooterComponent]
})
export class ViewleavesPageModule {}
