import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  getComments(){
    return new Observable(observer => {
      const currentComments = localStorage.getItem('comments');
      if(currentComments){
        observer.next(JSON.parse(currentComments));
      }
      return observer.next([]);
    });
  }

  findCommentByKey(currentKey: string){
    return new Observable( observer => {
      this.getComments().subscribe((comments: Comment[]) => {
        const searcherComment = comments.find(item => item.email === currentKey);
        if(searcherComment){
          observer.next(searcherComment)
        } else {
          observer.error([])
        }
      })
    });
  }

  addComment(commentData: Comment){
    const currentComments = localStorage.getItem('comments');
    if(currentComments){
      const currentCommentCollection = JSON.parse(currentComments) as Comment[];
      currentCommentCollection.push(commentData)
    }
  }

}
