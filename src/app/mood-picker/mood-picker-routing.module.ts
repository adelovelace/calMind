import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoodPickerPage } from './mood-picker.page';

const routes: Routes = [
  {
    path: '',
    component: MoodPickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoodPickerPageRoutingModule {}
