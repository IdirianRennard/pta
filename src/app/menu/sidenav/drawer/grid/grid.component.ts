import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-grid',
  template: `
  <mat-grid-list cols="2" rowHeight="fit" gutterSize="2rem">
    <mat-grid-tile>1</mat-grid-tile>
    <mat-grid-tile>2</mat-grid-tile>
    <mat-grid-tile>3</mat-grid-tile>
    <mat-grid-tile>4</mat-grid-tile>
  </mat-grid-list>
  `,
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
