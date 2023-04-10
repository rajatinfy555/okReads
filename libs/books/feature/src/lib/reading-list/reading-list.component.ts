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
    this.store.dispatch(removeFromReadingList({ item }));
    const removedSnackbar = this.snackBar.open('Removed from reading list', 'Undo', {
      duration: 3000,
      horizontalPosition: this.hPosition,
      verticalPosition: this.vPosition
    });
    removedSnackbar.onAction().subscribe(() => {
      this.store.dispatch(addToReadingList({book: item}));
    });
  }
}
