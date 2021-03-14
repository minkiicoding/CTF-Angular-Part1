import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { TopContentComponent } from './top-content/top-content.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMenuComponent,
    TopContentComponent,
    SearchBarComponent,
    MainContentComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
