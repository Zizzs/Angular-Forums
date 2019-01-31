import { Component, OnInit } from '@angular/core';
import { Thread } from '../models/thread.model'
import {ActivatedRoute} from "@angular/router";
import { ThreadService } from '../thread.service';



@Component({
  selector: 'app-post',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css'],
  providers: [ThreadService]
})
export class CreateThreadComponent implements OnInit {

  forumHeader: string;
  constructor(private route: ActivatedRoute, private threadService: ThreadService) {
    this.route.queryParams.subscribe(params => {
      this.forumHeader = params["header"];
    })
   }

  ngOnInit() {
  }

  createThread(user: string, title: string, body: string) {
    let dateNew = new Date();
    let date = (dateNew.toString()).substr(0, 25);
    let thread = new Thread(user, this.forumHeader, title, body, date);
    console.table(thread);
    this.threadService.addThread(thread);
  }
}
