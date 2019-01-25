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
import { TechnologyCardComponent } from './technology-card/technology-card.component';
import { TechnologyForumComponent } from './technology-forum/technology-forum.component';


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
    TechnologyCardComponent,
    TechnologyForumComponent
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
