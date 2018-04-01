import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  addCar = "";
  inputText = '';
  inputTextSecond = '';
  inputTextThird = '';
  inputTextFour = 'Default Text';

  alertFunc() {
    this.addCar = "New car added"
  }

  onKeyUp(event: Event){
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  onKeyUpSecond(value){
    this.inputTextSecond = value;
  }

  onKeyUpThird(event){
    console.log(event.keyCode)
    //if(event.code === 'Enter')
    if(event.keyCode === 13)
      this.inputTextThird = event.target.value;
  }

  //last RIGHT!!!
  onKeyUpFour(event){
    this.inputTextFour = event.target.value;
  }
}
