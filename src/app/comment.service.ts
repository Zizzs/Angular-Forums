import { Injectable } from '@angular/core';
import { Comment } from './models/comment.model'
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
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
