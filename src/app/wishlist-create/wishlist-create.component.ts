/*
Title: Assignment 8.2
Author: Professor Krasso
Date: 28 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project using the Open Library API!
*/

import { Component, OnInit } from '@angular/core';
import { iWishlistItem } from '../wish-item.interface'

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {
  items: Array<iWishlistItem> = []
  constructor() { }

  ngOnInit(): void {
  }
  updateItemHandler(item: iWishlistItem) {
    this.items.push(item)
  }
}
