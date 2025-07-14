import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoodPickerPageRoutingModule } from './mood-picker-routing.module';

import { MoodPickerPage } from './mood-picker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoodPickerPageRoutingModule
  ],
  declarations: [MoodPickerPage]
})
export class MoodPickerPageModule {}
