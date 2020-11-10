import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsFormComponent } from './components/comments-form/comments-form.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentsRoutingModule } from './comments-routing.module';

@NgModule({
  declarations: [
    CommentsFormComponent,
    CommentsListComponent
  ],
  imports: [ 
    CommonModule,
    CommentsRoutingModule
  ],
})
export class CommentsModule { }
