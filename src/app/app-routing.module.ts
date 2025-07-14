import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mood-picker',
    loadChildren: () => import('./mood-picker/mood-picker.module').then( m => m.MoodPickerPageModule)
  },
  {
    path: 'word-search',
    loadChildren: () => import('./word-search/word-search.module').then( m => m.WordSearchPageModule)
  },
  {
    path: 'image-puzzle',
    loadChildren: () => import('./image-puzzle/image-puzzle.module').then( m => m.ImagePuzzlePageModule)
  },
  {
    path: 'final-question',
    loadChildren: () => import('./final-question/final-question.module').then( m => m.FinalQuestionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
