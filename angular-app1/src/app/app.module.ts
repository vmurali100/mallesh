import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
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
import { Parent1Component } from "./ChildToParent/parent1/parent1.component";
import { Child1Component } from "./ChildToParent/child1/child1.component";
import { Sibling1Component } from "./SiblingsComponents/sibling1/sibling1.component";
import { Sibling2Component } from "./SiblingsComponents/sibling2/sibling2.component";
import { MyformComponent } from "./Forms/myform/myform.component";

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
    HelloworldComponent,
    Parent1Component,
    Child1Component,
    Sibling1Component,
    Sibling2Component,
    MyformComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
