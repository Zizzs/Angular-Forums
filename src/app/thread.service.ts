import { Injectable } from '@angular/core';
import { Thread } from './models/thread.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  threads: FirebaseListObservable<any[]>;
  technologyThreads: FirebaseListObservable<any[]>;
  angularThreads: FirebaseListObservable<any[]>;
  

  constructor(private database: AngularFireDatabase) { 
    this.threads = this.database.list('threads');
  }

  getThreads() {
    return this.threads;
  }

  addThread(newThread: Thread) {
    this.threads.push(newThread);
  }

  getThreadById(threadId: string){
    return this.database.object('threads/' + threadId);
  }


}
