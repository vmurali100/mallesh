import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { RegisterComponent } from "./UserManagement/register/register.component";
import { LoginComponent } from "./UserManagement/login/login.component";
import { DashboardComponent } from "./UserManagement/dashboard/dashboard.component";

// const routes: Routes = [
//   {
//     path: "home",
//     component: HomeComponent
//   },
//   {
//     path: "about",
//     component: AboutComponent
//   },
//   {
//     path: "contact",
//     component: ContactComponent
//   }
// ];

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
