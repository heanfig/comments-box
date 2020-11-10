import { NgModule } from '@angular/core';
import { CommentsFormComponent } from './components/comments-form/comments-form.component'
import { CommentsListComponent } from './components/comments-list/comments-list.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CommentsListComponent,
    data: {
      title : 'Lista de comentarios'
    }
  },
  {
    path: 'edit/:comment',
    component: CommentsFormComponent,
    data: {
      title : 'Ingresa un nuevo comentario'
    }
  },
  {
    path: 'add',
    component: CommentsFormComponent,
    data: {
      title : 'Ingresa un nuevo comentario'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
