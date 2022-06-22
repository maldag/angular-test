import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Book } from './book';
import { BookRaw } from './book-raw';
import { BookFactory } from './book-factory';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api = 'https://api4.angular-buch.com'
  books: Book[];

  constructor(private http: HttpClient) {
    this.books = [];
   }
   getAll(): Observable<Book[]> {
     return this.http.get<BookRaw[]>(
      `${this.api}/books`
      ).pipe(
        map( booksRaw =>
          booksRaw.map(b => BookFactory.fromRaw(b)))
      );
   }
   getSingle(isbn: string): Observable<Book> {
     return this.http.get<BookRaw>(
      `${this.api}/book/${isbn}`
      ).pipe(
        map( b => BookFactory.fromRaw(b))
      );
   }
   remove(isbn: string): Observable<any> {
     return this.http.delete(`${this.api}/book/${isbn}`,{ responseType: 'text'});
   }
}
