import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateprofilePage } from './updateprofile.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateprofilePageRoutingModule {}
