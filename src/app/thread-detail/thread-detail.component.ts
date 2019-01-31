import { Component, OnInit } from '@angular/core';
import {  Router, NavigationExtras, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ThreadService } from '../thread.service';
import { CommentService } from '../comment.service';
import { Thread } from '../models/thread.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private threadService: ThreadService, private commentService: CommentService) { }

  threadId: string = null;
  commentsToDisplay;
  threadToDisplay;

  ngOnInit() {
    let allCommentsTemp = [];
    let commentsToDisplayTemp = [];
    this.route.params.forEach((urlParameters) => {
      this.threadId = urlParameters['id'];
    });
    this.threadToDisplay = this.threadService.getThreadById(this.threadId);
    allCommentsTemp = this.commentService.getComments();
    for(let comment of allCommentsTemp) {
      console.log(comment.id, this.threadId);
      if (comment.id === this.threadId) {
        commentsToDisplayTemp.push(comment);
      }
    }
    this.commentsToDisplay = commentsToDisplayTemp;
    
  }

  createComment(user: string, body: string) {
    let dateNew = new Date();
    let date = (dateNew.toString()).substr(0, 25);
    let key = this.threadId;
    let comment = new Comment(user, body, date, key);
    this.commentService.addComment(comment);
  }

}
