import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    PanelComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
