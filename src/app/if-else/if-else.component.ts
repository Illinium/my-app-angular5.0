import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent {

  visible = false;
  newCar = "";
  cars = ['Audi', 'BMW', 'Ford', 'Seat', 'Suzuki'];
  items = [{id: 1, name: 'yo1'}, {id: 2, name: 'yo2'}, {id: 3, name: 'yo3'}];
  dates = [
    new Date(2015, 4,2),
    new Date(2012, 1,5),
    new Date(2013, 3,8),
  ];

  changeVisible() {
    this.visible = true;
    this.cars.push(this.newCar);
    this.newCar = "";

  }




}
