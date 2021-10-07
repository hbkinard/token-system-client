import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCenterComponent } from './game-center/game-center.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ArcadeComponent } from './arcade/arcade.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule} from "@angular/forms";
import { CardRefillComponent } from './card-refill/card-refill.component';

import { RouterModule } from '@angular/router';
import { UserStatusComponent } from './user-status/user-status.component';
import {NgPipesModule} from 'ng-pipes';
// import {CurrencyPipe} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    GameCenterComponent,
    LedgerComponent,
    ArcadeComponent,
    CardRefillComponent,
    UserStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    NgPipesModule,
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
