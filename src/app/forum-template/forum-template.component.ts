import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router, NavigationExtras } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ThreadService } from '../thread.service';
import * as _ from 'lodash';
import { Thread } from '../models/thread.model';


@Component({
  selector: 'app-technology-forum',
  templateUrl: './forum-template.component.html',
  styleUrls: ['./forum-template.component.css'],
  providers: [ThreadService]
})
export class ForumTemplateComponent implements OnInit {
  
  threadsAll: FirebaseListObservable<any[]>;
  threads = [];
  forumHeader = "";
  forumDescription = "";
 
  constructor(private router: Router, private route: ActivatedRoute, private threadService: ThreadService, private database: AngularFireDatabase) { 
    this.route.queryParams.subscribe(params => {
      this.forumHeader = params["header"];
      this.forumDescription = params["description"];
    })
  }

  ngOnInit() {
    this.threadsAll = this.threadService.getThreads();
    this.threadsAll.subscribe(currentThreads => {
      this.threads = currentThreads;
    })
  }

  goToDetailPage(clickedThread) {
    this.router.navigate(['topics/forum', clickedThread.$key]);
  }

  goToPostPage() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "header": this.forumHeader,
      }
    };
    this.router.navigate(['topics/forum/postthread'], navigationExtras);
  }
}
