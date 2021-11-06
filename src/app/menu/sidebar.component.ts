import { FaIcon } from './../models/fa-icon';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-menu',
  template: `
    <mat-toolbar toolbar [ngStyle]="toolbarStyle">
        <button mat-icon-button
            [ngStyle]="toolbarStyle"
            (click)="drawer.toggle()"
          >
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

      </mat-drawer-content>
    </mat-drawer-container>
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
  public toolbarStyle: Record<string, string> = {};

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

  setDividerStyle() {
    this.dividerStyle = {
      'display': 'flex',
      'justify-content': 'center',
      'width': '100%',
    }
  }
  setDrawerStyle() {
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

  setQuickLinkHolderStyle() {
    this.quickLinkHolderStyle = {
      'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'flex-end',
      'padding': '5px',
    }
  }

  setSidenavDividerStyle () {
    this.sidenavDividerStyle = {
      'border-top-color': "gold",
      'padding-bottom': '5px',
    }
  }

  setStyles() {
    this.setContainerStyle();
    this.setDrawerStyle();
    this.setMainMenuHolderStyle();
    this.setHoveredMenuStyle();
    this.setQuickLinkHolderStyle();
    this.setSidenavDividerStyle();
    this.setToolbarStyle();
  }

  setToolbarStyle() {
    this.toolbarStyle = {
      'background-color': 'black',
      'color': '#DC143C',
      'height': '5vh',
      'font-size': '2.5vh',
    }
  }


}

