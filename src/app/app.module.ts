import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';


//Add new Components to the declarations to initialize and add a component.
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
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
