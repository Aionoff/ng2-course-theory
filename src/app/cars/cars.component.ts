import { Component } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})

export class CarsComponent{
  carName= "";
  carYear = 2017;

  cars: [{name: string, year: number}] = [{
    name: 'Ford',
    year: 2015
  }];

  constructor(){
  }

  addCar(){
    this.cars.push({
      name: this.carName,
      year: this.carYear
    })

    this.carName = "";
    this.carYear = 2017;
  }
}
