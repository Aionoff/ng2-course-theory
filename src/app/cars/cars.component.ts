import { Component } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent{
  addCarStatus ='';
  inputText='';

  constructor(){
  }

  addCar(){
    this.addCarStatus = 'Car has been added!'
  }

  onKeyUp(value){
    this.inputText = value;
  }
}
