import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/comment.model';
import { CommentExistValidator } from '../../validators/comment.validator';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.scss']
})
export class CommentsFormComponent implements OnInit {

  public commentForm : FormGroup;

  constructor(
    private route:ActivatedRoute,
    private commentService: CommentsService
  ) { }

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[ Validators.required, Validators.email ], CommentExistValidator.createValidator(this.commentService)),
      website: new FormControl('', Validators.pattern(/^http\:\/\/\w+\.\w+$/)),
      comment: new FormControl('', [Validators.required]),
    });
    //const commentNode = this.route.snapshot.params['comment'];
  }

  submitCommentForm(): void {
    const currentFormItem = new Comment(this.commentForm.value);
    this.commentService.addComment(currentFormItem);
    this.commentForm.reset();
  }

}
