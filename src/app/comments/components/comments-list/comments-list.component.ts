import { Comment } from '../../models/comment.model';
import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  public commentsData: Comment[];

  constructor(
    private commentService: CommentsService
  ) { }

  ngOnInit() {
    this.commentService.getComments().subscribe(
      (response: Comment[]) => {
        this.commentsData = response;
      }
    );
  }

}
