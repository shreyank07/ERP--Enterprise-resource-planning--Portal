import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveapplyPage } from './leaveapply.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveapplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveapplyPageRoutingModule {}
