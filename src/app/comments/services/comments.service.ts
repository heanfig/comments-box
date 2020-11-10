import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { LocalStorageService } from 'ngx-localstorage';

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

  /*existComment(commentsModel: any){
    const currentComments = this.getComments();
    console.warn('currentComments',currentComments);
  }

  addComment(commentData: any){
    const currentComments = this.getComments();
    // this._storageService.set('comments')
  }*/

}
