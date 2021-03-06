import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarComponent } from './menu/toolbar/toolbar.component';

import { SidenavComponent } from './menu/sidenav/sidenav.component';

import { GemboxComponent } from './menu/gembox/gembox.component';
import { LoginComponent } from './menu/gembox/login/login.component';
import { QuicklinksComponent } from './menu/gembox/quicklinks/quicklinks.component';
import { SideMenuComponent } from './menu/sidenav/side-menu/side-menu.component';
import { GridComponent } from './menu/sidenav/drawer/grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    LoginComponent,
    GemboxComponent,
    QuicklinksComponent,
    SideMenuComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor( library: FaIconLibrary ) {
    library.addIconPacks( fab, far, fas );
  }
}
