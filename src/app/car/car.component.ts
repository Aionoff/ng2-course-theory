import { Component, OnInit, Input, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent{
  @Input("carItem") car: {name: string, year: number}
  @ContentChild("carHeading", {static: false}) carHeading: ElementRef;

  ngAfterViewInit(){

  }
}
