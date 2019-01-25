import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ThreadService } from '../thread.service';
import { Thread } from '../models/thread.model';
import { FirebaseObjectObservable } from 'angularfire2/database';

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

}
