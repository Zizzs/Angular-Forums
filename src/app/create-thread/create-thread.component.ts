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
    } else if (this.forumHeader === "JavaScript"){
      this.goToJavascriptForum();
    } else if (this.forumHeader === "General"){
      this.goToGeneralForum();
    } else if (this.forumHeader === "C#"){
      this.goToCsharpForum();
    } else if (this.forumHeader === "Python") {
      this.goToPythonForum();
    } else if (this.forumHeader === "Django") {
      this.goToDjangoForum();
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

  goToJavascriptForum() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "header": this.topicCard.name_javascript,
        "description": this.topicCard.description_javascript
      }
    };
    this.router.navigate(["topics/forum"], navigationExtras)
  }

  goToGeneralForum() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "header": this.topicCard.name_general,
        "description": this.topicCard.description_general
      }
    };
    this.router.navigate(["topics/forum"], navigationExtras)
  }

  goToCsharpForum() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "header": this.topicCard.name_Csharp,
        "description": this.topicCard.description_Csharp
      }
    };
    this.router.navigate(["topics/forum"], navigationExtras)
  }

  goToPythonForum() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "header": this.topicCard.name_python,
        "description": this.topicCard.description_python
      }
    };
    this.router.navigate(["topics/forum"], navigationExtras)
  }

  goToDjangoForum() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "header": this.topicCard.name_django,
        "description": this.topicCard.description_django
      }
    };
    this.router.navigate(["topics/forum"], navigationExtras)
  }
}
