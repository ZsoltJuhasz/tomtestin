/*
 * File: app.module.ts
 * Authors: Juhász Zsolt
 * Copyright: 2022, Juhász Zsolt
 * Group: Szoft II/N
 * Date: 2022-01-15
 * Github: https://github.com/ZsoltJuhasz
 * Licenc: GNU GPL
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
