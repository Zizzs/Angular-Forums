import {Pipe, PipeTransform} from '@angular/core';
import {Thread} from './models/thread.model';

@Pipe({
  name: "filterThreads",
  pure: false
})

//This pipe filters threads based off of the topic that the thread was posted in, allowing for them to only be seen in that topic.

export class ThreadsPipe implements PipeTransform {
  transform(input, forumHeader){

    let output: Thread[] = [];
    
    for (var i = 0; i < input.length; i++) {
      if (input[i].topic === forumHeader) {
        output.push(input[i]);
      }
    }
    return output;
  }
}

