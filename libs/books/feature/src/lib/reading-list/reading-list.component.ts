import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { addToReadingList, getReadingList, removeFromReadingList } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit {
  readingList$ = this.store.select(getReadingList);
  private hPosition: MatSnackBarHorizontalPosition = 'center';
  private vPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private readonly store: Store,
    private snackBar: MatSnackBar){
  }
  ngOnInit(): void {
  }

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item, undo: false }));
  }
}
