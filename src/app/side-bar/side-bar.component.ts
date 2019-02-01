import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThreadService } from '../thread.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  threadsAll: FirebaseListObservable<any[]>;
  threads = [];

  constructor(private router: Router, private threadService: ThreadService) { }

  ngOnInit() {
    this.threadsAll = this.threadService.getThreads();
    this.threadsAll.subscribe(currentThreads => {
      this.threads = currentThreads;
    })
  }

  goToTopicsPage() {
    this.router.navigate(['topics']);
  }

  goToHomePage() {
    this.router.navigate(['']);
  }

  goToInfoPage() {
    this.router.navigate(['info']);
  }

  goToRandomThreadPage() {
    let index = Math.floor(Math.random() * (this.threads.length - 1));
    this.router.navigate(['topics/forum', this.threads[index].$key])
    location.reload();
  }
}