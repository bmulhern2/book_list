/*
Title: Assignment 8.2
Author: Professor Krasso
Date: 28 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project using the Open Library API!
*/
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { iWishlistItem } from '../wish-item.interface'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  item: iWishlistItem
  @Output() addItemEmitter = new EventEmitter<iWishlistItem>();
  constructor() { 
    this.item = {} as iWishlistItem;
  }
  ngOnInit(): void {
  }
  addItem() {
    this.addItemEmitter.emit({ title: this.item.title, authors: this.item.authors })
    this.item = {} as iWishlistItem;
  }

}
