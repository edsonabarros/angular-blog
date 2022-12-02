import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    BigCardComponent,
    MenuBarComponent,
    MenuTitleComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent,
    FooterComponent,
    RightBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
