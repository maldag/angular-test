import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book'
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books?: Book[];

  constructor(private bs: BookStoreService) {

   }

  ngOnInit(): void {
    this.books = this.bs.getAll();
    // Angular Buch, Kapitel 9: Debugger Statement fügt Breakpoint ein
    // Im Chrome Debugger würde man dann im Debugger landen Strg+Shift+I
    //debugger;
  }
}
