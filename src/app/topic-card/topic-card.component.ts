import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technology-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  topicCard = {
    name_technology: "Technology",
    description_technology: "A place to post and discuss latest technology trends."
  }
  
  goToTopicsForum() {
    this.router.navigate(["topics/forum"])
  }


}
