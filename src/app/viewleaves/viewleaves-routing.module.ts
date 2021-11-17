import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewleavesPage } from './viewleaves.page';

const routes: Routes = [
  {
    path: '',
    component: ViewleavesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewleavesPageRoutingModule {}
