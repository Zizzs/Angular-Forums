import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ThreadService } from '../thread.service';


@Component({
  selector: 'app-technology-forum',
  templateUrl: './forum-template.component.html',
  styleUrls: ['./forum-template.component.css'],
  providers: [ThreadService]
})
export class ForumTemplateComponent implements OnInit {
  threads: FirebaseListObservable<any[]>;
  forumHeader = "";
  forumDescription = "";

  constructor(private router: Router, private route: ActivatedRoute, private threadService: ThreadService) { 
    this.route.queryParams.subscribe(params => {
      this.forumHeader = params["header"];
      this.forumDescription = params["description"];
    })
  }

  ngOnInit() {
    this.threads = this.threadService.getThreads();
    console.log(this.threads);
  }

  goToPostPage() {
    this.router.navigate(['topics/forum/postthread']);
  }
  
  // forumPostsDisplayBody;
  // forumPosts = {
  //   header: "This is a test post.",
  //   body: "This is a test body. Please excuse the terrible design work. It's slowly coming along, i'm hoping it turns into something really cool.",
  // }

  // posts = [this.forumPosts, this.forumPosts, this.forumPosts, this.forumPosts, this.forumPosts, this.forumPosts]
}
