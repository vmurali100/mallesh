import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { IndiaComponent } from "./india/india.component";
import { BanglaComponent } from "./bangla/bangla.component";
import { SrilankaComponent } from "./srilanka/srilanka.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "india", pathMatch: "full" },
  { path: "india", component: IndiaComponent },
  { path: "bangla", component: BanglaComponent },
  { path: "srilanka", component: SrilankaComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    BanglaComponent,
    SrilankaComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
