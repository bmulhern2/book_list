/*
Title: Assignment 8.2
Author: Professor Krasso
Date: 28 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project using the Open Library API!
*/

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service'
import { IBook } from '../book.interface'
import { Observable } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'

import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  IBook: Observable<IBook>;
  constructor(private dialog: MatDialog, private bookService: BooksService) {
    this.bookService.getBooks().subscribe(res => {
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          this.books.push({
            console.log(res[key].details)
          })
        }}
    })
   }
  ngOnInit(): void {
  }
  showBookDetails(isbn: string) {
   this.books = this.books.find(book => book.isbn === isbn)
  }
}
