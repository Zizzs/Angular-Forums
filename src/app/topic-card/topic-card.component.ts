import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  topicCard = AppComponent.topicCards;
  
  // Route Functions To Specific Forum Topics
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
