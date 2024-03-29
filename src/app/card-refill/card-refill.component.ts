import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {templateJitUrl} from "@angular/compiler";

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
  tokensPurchased = new EventEmitter<{numberTokensPurchased: number,
                                      totalTokenCost: number}>();

  constructor() {}

  ngOnInit(): void {}

  togglePurchaseStatus() {
    if (this.isRefillingCard) {
      this.isRefillingCard = false;
      this.tokenInput = 0;
      this.totalTokenCost = 0;
    } else {
      this.isRefillingCard = true;
    }
  }

  // capture user input and convert to number for validation before processing purchase
  setNumberTokensRequested(event: any): void {
    this.invalidTokenPurchase = false;
    this.numberTokensRequested = event.target.value;

    // convert string input to number
    this.numberTokensRequested = +this.numberTokensRequested;
  }

  // will set currency format in template file
  showTotalCost() {
    if (!this.isValidTokenInput()) {
      this.invalidTokenPurchase = true;
    } else {
      this.totalTokenCost = this.tokenInput * .25;
      this.toggleShowingTotalCost();
    }
  }

  toggleShowingTotalCost() {
    this.showingTotalTokenCost ? this.showingTotalTokenCost = false : this.showingTotalTokenCost = true;
  }

  purchaseTokens() {
    if (!this.isValidTokenInput()) {
      this.invalidTokenPurchase = true;

    // process token purchase and emit event to arcade component
    } else {
      this.numberTokensPurchased = this.numberTokensRequested;
      this.tokensPurchased.emit({
        numberTokensPurchased: this.numberTokensPurchased,
        totalTokenCost: this.totalTokenCost
      })

      // reset card refill info for next purchase
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

  // validate input - only allow up to 1,000 tokens to be purchased at a time
  // and check for letters/non-numbers
  isValidTokenInput() {
    return !(this.numberTokensRequested < 0
      || this.numberTokensRequested > 1000
      || this.numberTokensRequested % 1 != 0
      || isNaN(this.numberTokensRequested));
  }
}
