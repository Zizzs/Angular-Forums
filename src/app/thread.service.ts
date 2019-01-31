import { Injectable } from '@angular/core';
import { Thread } from './models/thread.model'
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  threads: FirebaseListObservable<any[]>;
  threadsAll: Thread[];

  constructor(private database: AngularFireDatabase) { 
    this.threads = database.list('threads');
    this.threadsAll =  this.unpackThreads();
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
    return this.threadsAll;
  }

  addThread(newThread: Thread) {
    this.threads.push(newThread);
  }

  getThreadById(threadId: string){
    return this.database.object('threads/' + threadId);
  }



}
