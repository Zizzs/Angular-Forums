import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router, NavigationExtras } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ThreadService } from '../thread.service';

import { Thread } from '../models/thread.model';


@Component({
  selector: 'app-technology-forum',
  templateUrl: './forum-template.component.html',
  styleUrls: ['./forum-template.component.css'],
  providers: [ThreadService]
})
export class ForumTemplateComponent implements OnInit {
  threads: FirebaseListObservable<any[]>;
  //technologyThreads: FirebaseListObservable<any[]>;
  threadsAll: FirebaseListObservable<any[]>;
  forumHeader = "";
  forumDescription = "";

  constructor(private router: Router, private route: ActivatedRoute, private threadService: ThreadService) { 
    this.route.queryParams.subscribe(params => {
      this.forumHeader = params["header"];
      this.forumDescription = params["description"];
    })
  }

  ngOnInit() {
    this.threadsAll = this.threadService.getThreads();
  }

  goToDetailPage(clickedThread) {
    this.router.navigate(['topics/forum/:id', clickedThread.$key]);
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
