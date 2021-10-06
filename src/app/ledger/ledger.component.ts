import { Component, OnInit } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor() { }

  time = new Date().getTime()
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  transactions = [
    {
      transactionType: 'CardRefill',
      dateAndTime: '2pm',
      numberTokensPurchased: 20,
      totalTokenCost: 5.00,
      balanceAfterTransaction: 20
    },

    {
      transactionType: 'GamePlay',
      dateAndTime: '3pm',
      gameId: 1,
      gameTitle: 'Rock Run',
      tokenCostPerGame: 2,
      balanceAfterTransaction: 18
    },

    {
      transactionType: 'GamePlay',
      dateAndTime: '4pm',
      gameId: 2,
      gameTitle: 'Go Stop Go',
      tokenCostPerGame: 4,
      balanceAfterTransaction: 14
    }
  ];

  ngOnInit(): void {
  }

}
