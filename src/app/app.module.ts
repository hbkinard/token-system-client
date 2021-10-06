import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCenterComponent } from './game-center/game-center.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ArcadeComponent } from './arcade/arcade.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCenterComponent,
    LedgerComponent,
    ArcadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
