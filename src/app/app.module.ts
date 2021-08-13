import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { CheckBoxComponent } from "./shared/controls/check-box/check-box.component";
import {RxTranslateModule} from "@rxweb/translate";
import { HomeComponent } from './core/home/home.component';
import { HomeHeaderComponent } from './core/home/header/home-header.component';
import { HomeFooterComponent } from './core/home/footer/home-footer.component';
import { HamburgerMenuComponent } from './core/home/header/hamburger-menu/hamburger-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CheckBoxComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HamburgerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RxTranslateModule.forRoot({
      cacheLanguageWiseObject: true,
      globalFilePath: "assets/i18n/{{language-code}}/global.{{language-code}}.json",
      filePath:'assets/i18n/{{language-code}}/{{translation-name}}.{{language-code}}.json'}
      )
  ],
  providers: [RxTranslateModule],
  exports: [RxTranslateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
