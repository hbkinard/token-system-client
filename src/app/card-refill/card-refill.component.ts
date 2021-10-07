import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-refill',
  templateUrl: './card-refill.component.html',
  styleUrls: ['./card-refill.component.css']
})
export class CardRefillComponent implements OnInit {

  isRefillingCard = false;
  invalidTokenPurchase = false;
  showTotalTokenCost = false;
  numberTokensRequested = 0;
  numberTokensPurchased = 0;
  totalTokenCost = 0;

  @Input()
  currentBalance = 0;

  @Output()
  tokensPurchased = new EventEmitter<{numberTokensPurchased: number}>();

  constructor() {
  }



  ngOnInit(): void {
  }

  togglePurchaseStatus() {
    this.isRefillingCard ? this.isRefillingCard = false : this.isRefillingCard = true;
  }

  setNumberTokensRequested(event: any): void {
    this.invalidTokenPurchase = false;
    this.numberTokensRequested = event.target.value;

    // convert string input to number
    this.numberTokensRequested = +this.numberTokensRequested;

    // possible add this to show user total token cost in money format / with a currency pipe
    // this.totalTokenCost = this.numberTokensRequested * .25;

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
      this.invalidTokenPurchase = false;
    }
  }

}
