import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { IndiaComponent } from "./india/india.component";
import { BanglaComponent } from "./bangla/bangla.component";
import { SrilankaComponent } from "./srilanka/srilanka.component";

const routes: Routes = [
  { path: "india", component: IndiaComponent },
  { path: "bangla", component: BanglaComponent },
  { path: "srilanka", component: SrilankaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    BanglaComponent,
    SrilankaComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
