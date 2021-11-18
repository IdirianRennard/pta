import { QuickLink } from './../../../models/quick-link';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gembox-quicklinks',
  template: `
  <button mat-icon-button
    *ngFor="let link of quickLinks"
    class="quickLink"
    ngbTooltip="{{link.name}}"
    (click)="handleQuickLink($event)"
  >
    <fa-icon [icon]="[link.icon.lib, link.icon.icon]" ></fa-icon>
  </button>
  `,
  styleUrls: ['./quicklinks.component.css']
})
export class QuicklinksComponent implements OnInit {

  public quickLinks: QuickLink[] = [];

  constructor( private _http: HttpClient ) {
    this._http.get( "assets/json/quickLinks.json" ).subscribe( (data: any) => {
      this.quickLinks = data.quickLinks;
      console.log( this.quickLinks )
    } )
  }

  ngOnInit(): void { }

  public handleQuickLink($event: Event){
    console.log( $event )
  }

  public mouseQuickLink($event: Event){
    console.log( $event )
  }
}
