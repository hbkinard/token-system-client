import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
//import { CardRefill } from '../models/cardRefill.model';

// import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-refill',
  templateUrl: './card-refill.component.html',
  styleUrls: ['./card-refill.component.css']
})
export class CardRefillComponent implements OnInit {

  isRefillingCard = false;
  invalidTokenPurchase = false;
  showingTotalTokenCost = false;
  numberTokensRequested = 0;
  numberTokensPurchased = 0;
  totalTokenCost = 0;
  tokenInput = 0;

  @Input()
  currentBalance = 0;

  @Output()
  tokensPurchased = new EventEmitter<{numberTokensPurchased: number}>();

  constructor() {
  }


  ngOnInit(): void {
  }

  togglePurchaseStatus() {
    if (this.isRefillingCard) {
      this.isRefillingCard = false;
      //this.toggleShowingTotalCost();
      this.tokenInput = 0;
      this.totalTokenCost = 0;
    } else {
      this.isRefillingCard = true;
    }

  }

  setNumberTokensRequested(event: any): void {
    this.invalidTokenPurchase = false;
    this.numberTokensRequested = event.target.value;

    // convert string input to number
    this.numberTokensRequested = +this.numberTokensRequested;
  }


  showTotalCost() {
    this.totalTokenCost = this.tokenInput * .25;
    this.toggleShowingTotalCost();
  }

  toggleShowingTotalCost() {
    this.showingTotalTokenCost ? this.showingTotalTokenCost = false : this.showingTotalTokenCost = true;
  }

  purchaseTokens() {
    // validate input - only allow up to 1,000 tokens to be purchased at a time
    if (this.numberTokensRequested < 0
          || this.numberTokensRequested > 1000
          || isNaN(this.numberTokensRequested)) {
      this.invalidTokenPurchase = true;

    // process token purchase
    } else {
      this.numberTokensPurchased = this.numberTokensRequested;
      this.tokensPurchased.emit({numberTokensPurchased: this.numberTokensPurchased})
      this.togglePurchaseStatus();
      this.toggleShowingTotalCost();
      this.invalidTokenPurchase = false;
      this.tokenInput = 0;
      this.totalTokenCost = 0;
    }
  }

  cancelPurchase() {
    this.togglePurchaseStatus();
    this.toggleShowingTotalCost();
    this.invalidTokenPurchase = false;
  }

}
