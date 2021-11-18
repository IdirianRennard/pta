import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-gembox',
  template: `
    <gembox-login></gembox-login>
    <mat-divider inset vertical class="dividerStyle"></mat-divider>
    <gembox-quicklinks></gembox-quicklinks>
  `,
  styleUrls: ['./gembox.component.css']
})
export class GemboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
