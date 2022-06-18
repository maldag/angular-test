import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  /**
   * Siehe https://github.com/angular-buch/book-monkey4/blob/master/src/app/book-monkey/iteration-1/property-bindings/book-list-item/book-list-item.component.ts
   * Hier ist ein Unterschied zum Buch !
   * book als optionale Variable, damit es im Konstruktor nicht zugewiesen werden muss.
   */
  @Input() book?: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
