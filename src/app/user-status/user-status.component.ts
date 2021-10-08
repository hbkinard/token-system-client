import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {

  constructor() { }

  @Input()
  currentBalance = 0;

  ngOnInit(): void {}
}
