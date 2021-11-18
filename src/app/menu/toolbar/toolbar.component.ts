import { FaIcon } from '../../models/fa-icon';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'menu-toolbar',
  template: `
  <mat-toolbar toolbar class="toolbarStyle">
      <button mat-flat-button
          class="menuButton"
          (click)="handleMenuEvent($event)"
      >
        <fa-icon [icon]="[menuIcon.lib, menuIcon.icon ]"></fa-icon>
      </button>
        <span class="toolbarStyle">Picotte PTA</span>
        <span class="spacer"></span>
        <span>
          <menu-gembox class="quickLinkHolderStyle"></menu-gembox>
        </span>
    </mat-toolbar>
    <menu-sidenav></menu-sidenav>
  `,
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public menuIcon: FaIcon = {
    lib: "fas",
    icon: "bars"
  };

constructor( ) { }

  ngOnInit(): void { }

  handleMenuEvent( $event: Event ) {
    console.log( $event )
  }
}
