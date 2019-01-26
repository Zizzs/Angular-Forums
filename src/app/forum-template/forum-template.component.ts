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
  threads: FirebaseListObservable<any[]>;
  threadsAll: any[];
  filteredThreads: any;
  forumHeader = "";
  forumDescription = "";
 
  constructor(private router: Router, private route: ActivatedRoute, private threadService: ThreadService, private database: AngularFireDatabase) { 
    this.route.queryParams.subscribe(params => {
      this.forumHeader = params["header"];
      this.forumDescription = params["description"];
    })
  }

  ngOnInit() {
    this.threadsAll = this.unpackThreads();
    this.filteredThreads = this.filterThreads(this.threadsAll);
  }

  unpackThreads() {
    let threads = [];
    let i: number = 0;
    this.database.list('/threads', {preserveSnapshot: true})
      .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          threads.push(snapshot.val());
          threads[i].key = snapshot.key;
          i++
        });
      })
    return threads;
  }

  filterThreads(threadsDB) {
    let filtered = [];
    let topic = this.forumHeader;
    for (let thread of threadsDB) {
      if (thread.topic === topic) {
        filtered.push(thread);
      }
    }
    return filtered;
  }

  goToDetailPage(clickedThread) {
    this.router.navigate(['topics/forum', clickedThread.key]);
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
