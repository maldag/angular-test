import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book'

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  constructor() {
    this.books = [
      {
        isbn: '978386497791',
        title: 'Angular',
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Kopenhagen'],
        published: new Date(2020,8,1),
        subtitle: 'Grundlagen, fortgeschrittene Themen und Best Practises',
        rating: 5,
        thumbnails: [{
          url: 'https://ng-buch.de/angular-cover.jpg',
          title: 'Buchcover'
        }],
        description: 'Lernen Sie Angular mit diesem Praxisbuch'
      },
      {
        isbn: '9783864905520',
        title: 'React',
        authors: ['Oliver Zeigermann', 'Nils Hartmann'],
        published: new Date(2019,11,12),
        subtitle: 'Grundlagen, fortgeschrittene Themen und Praxistipps',
        rating: 3,
        thumbnails: [{
          url: 'https://ng-buch.de/react-cover.jpg',
          title: 'Buchcover'
        }],
        description: 'Das bewährte und umfassende Praxisbuch zu React.'
      }
    ];
   }

  ngOnInit(): void {
  }

  showDetails(book:Book) {
    this.showDetailsEvent.emit(book);
  }
}
