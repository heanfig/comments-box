import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/comments', pathMatch: 'full' },
  { 
    path: 'comments', 
    loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule),
    data : {
      title : 'Comentarios'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
