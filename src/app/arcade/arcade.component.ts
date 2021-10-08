import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css']
})
export class ArcadeComponent implements OnInit {

  currentBalance = 0;
  showHistory = true;
  newBalance = 0;

  cardRefill = {
    transactionType: '',
    dateAndTime: 0,
    numberTokensPurchased: 0,
    totalTokenCost: 0,
    balanceAfterTransaction: 0
  }

  gamePlay = {
    transactionType: '',
    dateAndTime: 0,
    gameTitle: '',
    tokensToPlay: 0,
    balanceAfterTransaction: 0
  }

  arcadeTransactions: Array<any> = [];

  constructor() { }

  ngOnInit(): void {}

  toggleShowTransactionHistory() {
    this.showHistory ? this.showHistory = false : this.showHistory = true;
  }

  // get data from card-refill
  onTokensPurchased(data: {numberTokensPurchased: number, totalTokenCost: number}) {

    // increment current balance
    this.currentBalance = this.currentBalance + data.numberTokensPurchased;

    this.cardRefill = {transactionType: 'Card Refill',
                        dateAndTime: new Date().getTime(),
                        numberTokensPurchased: data.numberTokensPurchased,
                        totalTokenCost: data.totalTokenCost,
                        balanceAfterTransaction: this.currentBalance};

    // add transaction to beginning of arcadeTransactions array
    // if this application grew, I would re-examine the use of the 'unshift' function
    // as it would be expensive to shift all elements to the right with every transaction
    this.arcadeTransactions.unshift(this.cardRefill);
  }

  // get data from game-center
  onGamePlayed(data: {gameTitle: string, tokensToPlay: number }) {

    // decrement current balance
    this.currentBalance = this.currentBalance - data.tokensToPlay;

    this.gamePlay = {transactionType: 'Game Play',
      dateAndTime: new Date().getTime(),
      gameTitle: data.gameTitle,
      tokensToPlay: data.tokensToPlay,
      balanceAfterTransaction: this.currentBalance};

    this.arcadeTransactions.unshift(this.gamePlay);
  }
}

