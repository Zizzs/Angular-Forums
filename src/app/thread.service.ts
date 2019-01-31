import { Injectable } from '@angular/core';
import { Thread } from './models/thread.model'
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  threads: Thread[];

  constructor(private database: AngularFireDatabase) { 
    this.threads =  this.unpackThreads();
  }

  unpackThreads() {
    let threads = [];
    let i: number = 0;
    this.database.list('/threads', {preserveSnapshot: true})
      .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          threads.push(snapshot.val());
          threads[i].key = snapshot.key;
          i++
          console.table(threads);
        });
      })
    return threads;
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
