import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeavehistoryPage } from './leavehistory.page';

const routes: Routes = [
  {
    path: '',
    component: LeavehistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeavehistoryPageRoutingModule {}
