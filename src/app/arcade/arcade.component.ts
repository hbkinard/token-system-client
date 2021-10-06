import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css']
})
export class ArcadeComponent implements OnInit {

  constructor() { }

  currentBalance = 10;
  showHistory = false;

  ngOnInit(): void {
  }

  toggleShowTransactionHistory() {
    this.showHistory ? this.showHistory = false : this.showHistory = true;
  }

}

