import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FoodComponent} from './food/food.component';
import {MenuBarComponent} from './menu-bar/menubar.component';
import { MenuComponent } from './menu/menu.component'
import { StatusPipe } from './pipes/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodComponent,
    MenuBarComponent,
    MenuComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
