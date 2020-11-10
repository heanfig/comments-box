import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../../services/comments.service';

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
      name: new FormControl('',[Validators.email]),
      email: new FormControl('',[Validators.email]),
      website: new FormControl('',[Validators.pattern(/http:\/\/w+/)]),
      comment: new FormControl(''),
    });
    const commentNode = this.route.snapshot.params['comment'];
  }

  submitCommentForm(): void {
    debugger
    const currentFormTemp = this.commentForm.value;
    // this.commentService.existComment(currentFormTemp);
    /*if(commentService.existComment(currentFormTemp)){

    }*/
  }

}
