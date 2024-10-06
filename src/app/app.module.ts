import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HeroComponent } from './hero/hero/hero.component';
import { BestsellersComponent } from './bestsellers/bestsellers/bestsellers.component';
import { BannnerComponent } from './banner/bannner/bannner.component';
import { CollectionComponent } from './collection/collection/collection.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    BestsellersComponent,
    BannnerComponent,
    CollectionComponent,
    AboutUsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
