import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Web Development Forums';
 
  // The main info block for Topic headers and descriptions.
  public static topicCards = {
    name_technology: "Technology",
    description_technology: "A place to post and discuss latest technology trends.",
    name_angular: "Angular",
    description_angular: "Discuss all topics relating to Angular",
    name_react: "React",
    description_react: "Discuss all topics relating to React",
    name_javascript: "JavaScript",
    description_javascript: "Discuss all topics relating to Javascript",
    name_general: "General",
    description_general: "General Discussion",
    name_Csharp: "C#",
    description_Csharp: "Discuss all topics relating to C#",
    name_python: "Python",
    description_python: "Discuss all topics relating to Python",
    name_django: "Django",
    description_django: "Discuss all topics relating to Django, the web development framework using Python",
  }
}
