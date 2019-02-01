import { Component, OnInit } from '@angular/core';
import { Thread } from '../models/thread.model'
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { ThreadService } from '../thread.service';
import { AppComponent } from '../app.component';



@Component({
  selector: 'app-post',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css'],
  providers: [ThreadService]
})
export class CreateThreadComponent implements OnInit {

  topicCard = AppComponent.topicCards;
  forumHeader: string;
  constructor(private router: Router, private route: ActivatedRoute, private threadService: ThreadService) {
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
    this.threadService.addThread(thread);
    if(this.forumHeader === "Technology"){
      this.goToTechnologyForum();
    } else if (this.forumHeader === "Angular"){
      this.goToAngularForum();
    } else if (this.forumHeader === "React"){
      this.goToReactForum();
    } else {
      this.router.navigate(["topics"]);
    }
  }

  goToTechnologyForum() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "header": this.topicCard.name_technology,
        "description": this.topicCard.description_technology
      }
    };
    this.router.navigate(["topics/forum"], navigationExtras)
  }

  goToAngularForum() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "header": this.topicCard.name_angular,
        "description": this.topicCard.description_angular
      }
    };
    this.router.navigate(["topics/forum"], navigationExtras)
  }

  goToReactForum() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "header": this.topicCard.name_react,
        "description": this.topicCard.description_react
      }
    };
    this.router.navigate(["topics/forum"], navigationExtras)
  }
}
