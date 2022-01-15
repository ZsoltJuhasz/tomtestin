/*
 * File: app.component.ts
 * Authors: Juhász Zsolt
 * Copyright: 2022, Juhász Zsolt
 * Group: Szoft II/N
 * Date: 2022-01-15
 * Github: https://github.com/Zsoltjuhasz
 * Licenc: GNU GPL
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testtömegindex';
  weight:string;
  height:string;
  index:string;

  constructor(){
    this.weight = ''
    this.height = '';
    this.index = '';
  }

  calcWeightIndex():any{
    var index = Number(this.weight)/Math.pow(Number(this.height)/100,2);
    this.index = String(index);
    this.weight = '';
    this.height = '';  
  }
}
