import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiletemplatePage } from './profiletemplate.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiletemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiletemplatePageRoutingModule {}
