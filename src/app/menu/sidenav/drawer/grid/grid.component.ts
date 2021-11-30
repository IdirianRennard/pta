import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-grid',
  template: `
  <mat-grid-list cols="4" rowHeight="2:1" gutterSize="1rem" class="gridListStyle">
    <mat-grid-tile rowspan="3" colspan="3" class="gridStyle">Main Card</mat-grid-tile>
    <mat-grid-tile class="gridStyle">Event Card</mat-grid-tile>
    <mat-grid-tile></mat-grid-tile>
    <mat-grid-tile class="gridStyle">Mission Card</mat-grid-tile>
  </mat-grid-list>
  `,
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
