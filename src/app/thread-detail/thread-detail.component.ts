import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ThreadService } from '../thread.service';
import { Thread } from '../models/thread.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private threadService: ThreadService) { }

  threadId: string = null;
  threadToDisplay;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.threadId = urlParameters['id'];
    });
    this.threadToDisplay = this.threadService.getThreadById(this.threadId);
  }

  // createComment(user: string, body: string) {
  //   let dateNew = new Date();
  //   let date = (dateNew.toString()).substr(0, 25);
  //   let comment = new Comment(user, body, date);
  //   this.threadService.addComment(this.threadToDisplay, comment);
  // }

}
