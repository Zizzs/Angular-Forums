import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.css']
})
export class TechnologyCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTopicsForum() {
    this.router.navigate(["topics/technology"])
  }
}
