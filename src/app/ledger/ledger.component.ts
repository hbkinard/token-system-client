import {Component, Input, OnInit} from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor() { }

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;


  // get transactions to display from arcade component
  @Input()
  arcadeTransactions = [];

  ngOnInit(): void {}

}
