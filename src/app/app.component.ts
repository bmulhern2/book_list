/*
Title: Assignment 5.4
/*
Title: Assignment 6.2
Author: Professor Krasso
Date: 15 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project part 4 part 1!
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
