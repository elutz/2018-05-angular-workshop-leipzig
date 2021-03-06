import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  isbn: string;
  isbn$: Observable<string>;

  ngOnInit() {
    this.isbn$ = this.route.params.pipe(
      map(params => params.isbn)
    );
    // Alternativ: this.isbn = this.route.snapshot.params.isbn;
  }

}
