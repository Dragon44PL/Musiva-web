import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./core/login/login.component";
import {RegisterComponent} from "./core/register/register.component";
import {HomeComponent} from "./core/home/home.component";

const routes: Routes = [  { path: '', redirectTo: "en/login", pathMatch: "full" },
                          { path: ':languageCode/login', component: LoginComponent },
                          { path: ':languageCode/register', component: RegisterComponent },
                          { path: ':languageCode/home', component: HomeComponent }]  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
