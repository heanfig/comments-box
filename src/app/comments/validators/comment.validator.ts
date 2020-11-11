import { CommentsService } from '../services/comments.service';
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

export class CommentExistValidator {
  static createValidator(commentService: CommentsService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
        return new Observable<ValidationErrors>( observer => {
            const currentEmail = control.value;
            return commentService.findCommentByKey(currentEmail).subscribe(
                item => observer.next({invalidAsync: true}),
                error => observer.next({invalidAsync: true})
            )
        });
    };
  }
}