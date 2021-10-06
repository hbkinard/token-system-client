import {Component, Input, OnInit} from '@angular/core';

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
    }
  ];

  @Input()
  currentBalance = 0;

  ngOnInit(): void {
  }

}

