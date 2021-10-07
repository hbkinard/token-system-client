import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-center',
  templateUrl: './game-center.component.html',
  styleUrls: ['./game-center.component.css']
})
export class GameCenterComponent implements OnInit {

  constructor() { }

  games = [
    {
      gameId: '1',
      gameTitle: 'Rock Run',
      tokensToPlay: 2
    },
    {
      gameId: '2',
      gameTitle: 'Go Stop Go',
      tokensToPlay: 4
    },
    {
      gameId: '3',
      gameTitle: 'Long Story Game',
      tokensToPlay: 10
    }
  ];

  @Input()
  currentBalance = 0;

  @Output()
  gamePlayed = new EventEmitter<{gameTitle: string, tokensToPlay: number}>();


  ngOnInit(): void {
  }

  hasEnoughTokensToPlay(numberTokensNeeded: number) {
    return this.currentBalance >= numberTokensNeeded;
  }

  playGame(gameTitle: string, tokensToPlay: number) {
    this.gamePlayed.emit({gameTitle: gameTitle, tokensToPlay: tokensToPlay})
  }
}

