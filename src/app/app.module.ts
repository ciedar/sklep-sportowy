import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HeroComponent } from './hero/hero/hero.component';
import { BestsellersComponent } from './bestsellers/bestsellers/bestsellers.component';
import { BannnerComponent } from './banner/bannner/bannner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    BestsellersComponent,
    BannnerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
