import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalQuestionPage } from './final-question.page';

const routes: Routes = [
  {
    path: '',
    component: FinalQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalQuestionPageRoutingModule {}
