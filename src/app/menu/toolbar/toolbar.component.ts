import { mainMenuOption } from './../../models/main-menu-option';
import { QuickLink } from './../../models/quick-link';
import { HttpClient } from '@angular/common/http';
import { FaIcon } from '../../models/fa-icon';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { setup, Setup } from 'src/app/models/setup';


@Component({
  selector: 'menu-toolbar',
  template: `
  <mat-toolbar toolbar class="toolbarStyle">
      <button mat-flat-button
          class="menuButton"
      >
        <fa-icon [icon]="[menuIcon.lib, menuIcon.icon ]"></fa-icon>
      </button>
        <span class="toolbarStyle">Picotte PTA</span>
        <span class="spacer"></span>
        <span>
          <!-- Login -->
        </span>
        <mat-divider inset vertical class="dividerStyle"></mat-divider>
        <span class="quickLinkHolderStyle">
          <button mat-icon-button
              *ngFor="let link of quickLinks"
              class="quickLink"
              (click)="handleQuickLink($event)"
          >
            <fa-icon
                [icon]="[link.icon.lib, link.icon.icon]"
             >
          </fa-icon>
          <div class="quickLinkName">
            {{link.name.toUpperCase()}}
          </div>
          </button>
        </span>
    </mat-toolbar>
  `,
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public menuIcon: FaIcon = {
    lib: "fas",
    icon: "bars"
  };

  private _setup: Setup = new setup();
  public quickLinks: QuickLink[] = [];
  public mainMenu: any = []


  constructor( private _http: HttpClient ) {
    this._http.get( "./assets/json/setup.json" ).subscribe( (data:any) => {
      this._setup = data;
      this.quickLinks = data.quickLinks;
      this.mainMenu = data.mainMenu;
      console.log( this._setup )
    } );
  }

  ngOnInit(): void { }

  handleQuickLink( $event: Event ) {
    console.log( $event )
  }
}
