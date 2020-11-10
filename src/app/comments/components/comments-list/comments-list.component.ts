import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  public commentsData: any[];

  constructor() { }

  ngOnInit() {
    this.commentsData = this.getComments();
  }

  private getComments() : any[]{
    return [
      {
        name: 'Wilfredo Baez',
        email: 'heanfig@gmail.com',
        website: 'http://google.com'
      }
    ];
  }

}
