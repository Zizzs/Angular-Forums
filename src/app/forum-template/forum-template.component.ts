import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-technology-forum',
  templateUrl: './forum-template.component.html',
  styleUrls: ['./forum-template.component.css']
})
export class ForumTemplateComponent implements OnInit {

  forumHeader = "";
  forumDescription = "";

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.forumHeader = params["header"];
      this.forumDescription = params["description"];
    })
  }

  ngOnInit() {
  }

  goToPostPage() {
    this.router.navigate(['topics/forum/postthread']);
  }
  
  forumPostsDisplayBody;
  forumPosts = {
    header: "This is a test post.",
    body: "This is a test body. Please excuse the terrible design work. It's slowly coming along, i'm hoping it turns into something really cool.",
  }

  posts = [this.forumPosts, this.forumPosts, this.forumPosts, this.forumPosts, this.forumPosts, this.forumPosts]
}
