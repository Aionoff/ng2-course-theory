import { Component } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent{
  carName= "";
  isCarAdded = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];
  dates = [
    new Date(2015, 2, 4).toDateString(),
    new Date(2016, 3, 5).toDateString(),
    new Date(2017, 4, 6).toDateString(),
    new Date(2018, 5, 7).toDateString(),
    new Date(2019, 6, 8).toDateString(),
  ];

  constructor(){
  }

  addCar(){
    this.isCarAdded = true;
    this.cars.push(this.carName)
    this.carName = "";
  }
}
