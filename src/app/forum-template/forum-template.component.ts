import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-forum',
  templateUrl: './forum-template.component.html',
  styleUrls: ['./forum-template.component.css']
})
export class ForumTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  forumHeader = "Test Header";
  forumPostsDisplayBody;
  forumPosts = {
    header: "This is a test post.",
    body: "This is a test body. Please excuse the terrible design work. It's slowly coming along, i'm hoping it turns into something really cool.",
  }

  posts = [this.forumPosts, this.forumPosts, this.forumPosts]
}
