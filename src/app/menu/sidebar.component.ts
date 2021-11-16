import { FaIcon } from './../models/fa-icon';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-sidenav',
  template: `
    <mat-toolbar toolbar >
        <button mat-icon-button>
          <fa-icon [icon]="[menuIcon.lib, menuIcon.icon ]"></fa-icon>
        </button>
        <span>Picotte Elementary PTA</span>
    </mat-toolbar>

    <mat-drawer-container [ngStyle]="containerStyle">
      <mat-drawer #drawer [ngStyle]="drawerStyle">
        <div [ngStyle]="quickLinkHolderStyle">
          <button mat-icon-button
              *ngFor="let link of quickLinks"
              class="quickLink"
              (click)="drawer.toggle()"
              (click)="openSite(link.url)"
          >
            <fa-icon [icon]="[link.icon.lib, link.icon.icon]">"</fa-icon>
          </button>
        </div>
        <mat-divider [ngStyle]="sidenavDividerStyle"></mat-divider>
        <div [ngStyle]="mainMenuHolderStyle">
          <button mat-raised-button
            *ngFor="let entry of mainMenu;"
            class="mainMenu"
            (click)="drawer.toggle()"
          >
            {{ entry.name }}
          </button>
        </div>
      </mat-drawer>
      <mat-drawer-content>
  `,
  styles: []
})
export class SidebarComponent implements OnInit {

  public buttonStyle: Record<string, string> = {};
  public containerStyle: Record<string, string> = {};
  public dividerStyle: Record<string, string> = {};
  public drawerStyle: Record<string, string> = {};
  public hoveredMenuStyle: Record<string, string> = {};
  public mainMenuHolderStyle: Record<string, string> = {};
  public quickLinkHolderStyle: Record<string, string> = {};
  public sidenavDividerStyle: Record<string, string> = {};
  // public toolbarStyle: Record<string, string> = {};

  private _setupUrl: string = "./assets/json/setup.json";
  public setup: any;

  public menuIcon: FaIcon = {
    lib: "fas",
    icon: "bars"
  };

  public mainMenu: Array<any> = [];

  public quickLinks: Array<any> = [];

  constructor( private http: HttpClient ) {
    this.getSetupData();
    this.setStyles();
  }

  ngOnInit(): void {
  }

  openSite( url: string ): void {
    window.open( url, "_blank" );
  }

  getSetupData(): void {
    this.http.get( this._setupUrl ).subscribe( (data:any) => {
      this.setup = data;
      this.quickLinks = data.quickLinks;
      this.mainMenu = data.mainMenu;
      console.log( this.setup );
    });
  }

  setContainerStyle(){
    this.containerStyle = {
      'background-color': 'unset',
      'position': 'fixed',
      'width': '100vw',
      'height': '95vh'
    }
  }

DrawerStyle() {
    this.drawerStyle = {
      'background-color': '#222',
      'height': 'inherit',
      'position': 'sticky',
      'width': 'max-content',
      'max-width': '75%',
    }
  }

  setHoveredMenuStyle() {
    this.hoveredMenuStyle = {
      'align-self': 'flex-start',
      'border-radius': 'unset',
      'background-color': 'gold',
      'color': 'black',
      'font-size' : 'large',
      'font-variant': "all-caps",
      "margin-bottom" : "2px",
      "text-align": "right",
      "width": "100%",
    }
  }

  setMainMenuHolderStyle() {
    this.mainMenuHolderStyle = {
      'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'flex-start',
    }
  }


  setStyles() {
    this.setContainerStyle();
    this.setMainMenuHolderStyle();
    this.setHoveredMenuStyle();
  }
}

