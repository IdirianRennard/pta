import { MainMenuOption } from './../../../models/main-menu-option';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-menu',
  template: `
    <button mat-flat-button
        *ngFor="let opt of menuOption"
        class="menuStyle"
    >
      {{opt.name}}
    </button>
  `,
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  public menuOption: MainMenuOption[] = [];

  constructor( private _http: HttpClient ) {
    this._http.get( "assets/json/mainMenu.json" ).subscribe( (data: any) => {
      this.menuOption = data.mainMenu;
      console.log( this.menuOption );
    } )
  }

  ngOnInit() {
  }

}
