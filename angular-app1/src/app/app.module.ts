import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MuraliComponent } from "./murali.component";
import { sample1Component } from "./sample.component";
import { NewsComponent } from "./sample3.component";
import { NewsampleComponent } from "./newsample/newsample.component";
import { Newsample2Component } from "./newsample2/newsample2.component";
import { Newsample3Component } from "./newsample3/newsample3.component";
import { Angular1Component } from "./angular1/angular1.component";
import { HelloworldComponent } from "./helloworld/helloworld.component";
import { MalleshComponent } from "./mallesh/mallesh.component";

@NgModule({
  declarations: [
    AppComponent,
    MalleshComponent,
    MuraliComponent,
    sample1Component,
    NewsComponent,
    NewsampleComponent,
    Newsample2Component,
    Newsample3Component,
    Angular1Component,
    HelloworldComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
