import { Component } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent{
  carName= "";
  isCarAdded = false;
  cars =['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];


  constructor(){
  }

  addCar(){
    this.isCarAdded = true;
    this.cars.push(this.carName)
    this.carName = "";
  }
}
