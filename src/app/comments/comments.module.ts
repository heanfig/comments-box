import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsFormComponent } from './components/comments-form/comments-form.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentsRoutingModule } from './comments-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommentsFormComponent,
    CommentsListComponent
  ],
  imports: [ 
    ReactiveFormsModule,
    CommonModule,
    CommentsRoutingModule
  ],
})
export class CommentsModule { }
