import { FaIcon } from '../../models/fa-icon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-toolbar',
  template: `
  <mat-toolbar toolbar class="toolbarStyle">
      <button mat-flat-button
          class="menuButton"
          (click)="drawer.toggle()"
      >
        <fa-icon [icon]="[menuIcon.lib, menuIcon.icon]"></fa-icon>
      </button>
        <span class="toolbarStyle">Picotte PTA</span>
        <span class="spacer"></span>
        <span>
          <menu-gembox class="quickLinkHolderStyle"></menu-gembox>
        </span>
    </mat-toolbar>

    <mat-drawer-container class="containerStyle" >
      <mat-drawer #drawer class="drawerStyle" mode="side">
        <side-menu></side-menu>
      </mat-drawer>
      <mat-drawer-content>
        <side-grid></side-grid>
      </mat-drawer-content>
    </mat-drawer-container>
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
}
