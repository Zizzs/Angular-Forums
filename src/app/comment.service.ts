import { Injectable } from '@angular/core';
import { Comment } from './models/comment.model'
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

// This is the service that connects to Firebase and manages populating the application with comments.
export class CommentService {
  comments: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.comments = database.list('comments');
  }

  getComments() {
    return this.comments;
  }

  addComment(newComment: Comment) {
    this.comments.push(newComment);
    
  }

  getCommentById(commentId: string){
    return this.database.object('comments/' + commentId);
  }
}
