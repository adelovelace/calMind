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
  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
  {
    path: 'thanks',
    loadChildren: () => import('./thanks/thanks.module').then( m => m.ThanksPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
