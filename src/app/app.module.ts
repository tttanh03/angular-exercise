import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FoodComponent} from './Food/food.component'
@NgModule({
  declarations: [
    FoodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FoodComponent]
})
export class AppModule { }
