import { Component } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent{
  carName= "";
  isCarAdded = false;

  constructor(){
  }

  addCar(){
    this.isCarAdded = true;
  }
}
