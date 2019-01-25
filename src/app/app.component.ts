import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forums';

  public static topicCards = {
    name_technology: "Technology",
    description_technology: "A place to post and discuss latest technology trends.",
    name_angular: "Angular",
    description_angular: "Discuss all topics relating to Angular."
  }
}
