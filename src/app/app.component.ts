/*
Title: Assignment 8.2
Author: Professor Krasso
Date: 28 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project using the Open Library API!
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment;
  constructor() {
    this.assignment = "Welcome to In-N-Out-Books"
  }
}
