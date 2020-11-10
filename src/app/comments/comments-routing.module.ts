import { NgModule } from '@angular/core';
import { CommentsFormComponent } from './components/comments-form/comments-form.component'
import { CommentsListComponent } from './components/comments-list/comments-list.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CommentsListComponent,
    data: { breadcrumb: undefined, breadcrumblink: true }
  },
  {
    path: '/form',
    component: CommentsFormComponent,
    data: { breadcrumb: undefined, breadcrumblink: true }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
