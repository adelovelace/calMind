import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagePuzzlePageRoutingModule } from './image-puzzle-routing.module';

import { ImagePuzzlePage } from './image-puzzle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagePuzzlePageRoutingModule
  ],
  declarations: [ImagePuzzlePage]
})
export class ImagePuzzlePageModule {}
