import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteprofilePage } from './completeprofile.page';

const routes: Routes = [
  {
    path: '',
    component: CompleteprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteprofilePageRoutingModule {}
