import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCenterComponent } from './game-center/game-center.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ArcadeComponent } from './arcade/arcade.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule} from "@angular/forms";
import { CardRefillComponent } from './card-refill/card-refill.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCenterComponent,
    LedgerComponent,
    ArcadeComponent,
    CardRefillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
