import {Pipe, PipeTransform} from '@angular/core';
import {Comment} from './models/comment.model';

@Pipe({
  name: "filterComments",
  pure: false
})

// This pipe filters comments based off the thread ID that they were posted in, so that they are only seen within that thread.

export class CommentsPipe implements PipeTransform {
  transform(input, threadId){

    var output: Comment[] = [];
    
    for (var i = 0; i < input.length; i++) {
      if (input[i].id === threadId) {
        output.push(input[i]);
      }
    }
    return output;
  }
}