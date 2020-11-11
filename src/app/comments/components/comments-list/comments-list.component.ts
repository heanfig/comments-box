import { Comment } from '../../models/comment.model';
import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  public commentsData: Comment[];
  public commentsDataTemp: Comment[];
  public searchName = new FormControl('');

  constructor(
    private commentService: CommentsService
  ) { }

  ngOnInit() {

    this.searchName.valueChanges.subscribe((key:string) =>{
      if(key === ''){
        this.commentsData = this.commentsDataTemp;
      } else {
        this.commentsData = this.commentsData.filter( item => 
          item.name.includes(key) || item.email.includes(key) || item.website.includes(key)
        );
      }
    })

    this.commentService.getComments().subscribe(
      (response: Comment[]) => {
        this.commentsData = response;
        this.commentsDataTemp = response;
      }
    );
  }

}
