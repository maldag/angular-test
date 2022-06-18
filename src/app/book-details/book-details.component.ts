import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book?: Book;
  @Output() showListEvent = new EventEmitter<any>();

  constructor(private bs: BookStoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.book=this.bs.getSingle(params.get('isbn')||'');
  }

  getRating(num: number) {
    return new Array(num);
  }

  showBookList() {
    this.showListEvent.emit();
  }

}
