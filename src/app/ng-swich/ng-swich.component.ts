import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swich',
  templateUrl: './ng-swich.component.html',
  styleUrls: ['./ng-swich.component.css']
})
export class NgSwichComponent implements OnInit {

  items = [1, 2, 3, 4, 5];
  current = 1;

  onClick(number: number){
    this.current = number;
  }

  constructor() { }

  ngOnInit() {
  }

}
