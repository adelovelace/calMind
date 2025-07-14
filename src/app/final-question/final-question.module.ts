import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalQuestionPageRoutingModule } from './final-question-routing.module';

import { FinalQuestionPage } from './final-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalQuestionPageRoutingModule
  ],
  declarations: [FinalQuestionPage]
})
export class FinalQuestionPageModule {}
