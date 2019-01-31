import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';

import { CommentsPipe } from './filterComments.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

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
    CreateThreadComponent,
    ThreadDetailComponent,
    CommentsPipe
  ],

  // Add modules to the imports.
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
