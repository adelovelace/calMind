import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagePuzzlePage } from './image-puzzle.page';

const routes: Routes = [
  {
    path: '',
    component: ImagePuzzlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagePuzzlePageRoutingModule {}
