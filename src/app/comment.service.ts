import { Injectable } from '@angular/core';
import { Comment } from './models/comment.model'
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comments: FirebaseListObservable<any[]>;
  commentsAll: Comment[];

  constructor(private database: AngularFireDatabase) { 
    this.comments = database.list('comments');
    this.commentsAll =  this.unpackComments();
  }

  unpackComments() {
    let comments = [];
    let i: number = 0;
    this.database.list('/comments', {preserveSnapshot: true})
      .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          comments.push(snapshot.val());
          comments[i].key = snapshot.key;
          i++
        });
      })
    return comments;
  }

  getComments() {
    return this.commentsAll;
  }

  addComment(newComment: Comment) {
    this.comments.push(newComment);
  }

  getCommentById(commentId: string){
    return this.database.object('comments/' + commentId);
  }
}
