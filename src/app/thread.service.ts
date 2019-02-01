import { Injectable } from '@angular/core';
import { Thread } from './models/thread.model'
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

//The service grabs all threads from Firebase, and then populates the application with threads when called.

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  threads: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.threads = database.list('threads');
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
