import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MenuComponent } from './menu/menu.component';
import { Area1Component } from './area1/area1.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    MenuComponent,
    Area1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
