import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css']
})
export class ArcadeComponent implements OnInit {

  currentBalance = 10;
  showHistory = false;
  newBalance = 0;

  constructor() { }


  ngOnInit(): void {
  }

  toggleShowTransactionHistory() {
    this.showHistory ? this.showHistory = false : this.showHistory = true;
  }

  onTokensPurchased(data: {numberTokensPurchased: number}) {
    this.newBalance = this.currentBalance + data.numberTokensPurchased;
    this.currentBalance = this.newBalance;
    console.log(this.currentBalance);
  }

}

