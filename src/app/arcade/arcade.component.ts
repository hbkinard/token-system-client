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

  ngOnInit(): void {
  }

  toggleShowTransactionHistory() {
    this.showHistory ? this.showHistory = false : this.showHistory = true;
  }

  onTokensPurchased(data: {numberTokensPurchased: number, totalTokenCost: number}) {
    this.newBalance = this.currentBalance + data.numberTokensPurchased;
    this.currentBalance = this.newBalance;

    this.cardRefill = {transactionType: 'Card Refill',
                        dateAndTime: new Date().getTime(),
                        numberTokensPurchased: data.numberTokensPurchased,
                        totalTokenCost: data.totalTokenCost,
                        balanceAfterTransaction: this.currentBalance};

    this.arcadeTransactions.unshift(this.cardRefill);
  }

  onGamePlayed(data: {gameTitle: string, tokensToPlay: number }) {
    this.newBalance = this.currentBalance - data.tokensToPlay;
    this.currentBalance = this.newBalance;

    this.gamePlay = {transactionType: 'Game Play',
      dateAndTime: new Date().getTime(),
      gameTitle: data.gameTitle,
      tokensToPlay: data.tokensToPlay,
      balanceAfterTransaction: this.currentBalance};

    this.arcadeTransactions.unshift(this.gamePlay);
  }
}

