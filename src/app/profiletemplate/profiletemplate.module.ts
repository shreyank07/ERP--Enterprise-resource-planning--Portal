import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiletemplatePageRoutingModule } from './profiletemplate-routing.module';
import { NavbarAComponent } from '../navbar-a/navbar-a.component';
import { ProfiletemplatePage } from './profiletemplate.page';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiletemplatePageRoutingModule
  ],
  declarations: [ProfiletemplatePage,NavbarAComponent,FooterComponent]
})
export class ProfiletemplatePageModule {}
