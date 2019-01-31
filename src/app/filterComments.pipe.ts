import {Pipe, PipeTransform} from '@angular/core';
import {Comment} from './models/comment.model';

@Pipe({
  name: "filterComments",
  pure: false
})


export class CommentsPipe implements PipeTransform {
  transform(input: Comment[], threadId){
    var output: Comment[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].id === threadId) {
        output.push(input[i]);
      }
    }
    return output;
  }
}