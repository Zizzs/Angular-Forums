import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainBlockComponent } from './main-block/main-block.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { ForumTemplateComponent } from './forum-template/forum-template.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';


//Add new Components to the declarations to initialize and add a component.
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    MainBlockComponent,
    FooterComponent,
    WelcomeComponent,
    TopicsComponent,
    TopicCardComponent,
    ForumTemplateComponent,
    CreateThreadComponent
  ],

  // Add modules to the imports.
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
