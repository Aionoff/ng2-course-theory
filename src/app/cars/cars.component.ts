import { Component } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent{
  carName= "";
  isCarAdded = false;
  cars =['Ford', 'Audi', 'BMW'];
  items = [{id:3, name: 'item 1'},
    {id:4, name: 'item 2'},
    {id:5, name: 'item 3'}
   ];

  constructor(){
  }

  addCar(){
    this.isCarAdded = true;
    this.cars.push(this.carName)
    this.carName = "";
  }
}
