import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.styl']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: {
    car: string,
    interior: string,
    wheels: string
  }

  constructor() {
    this.name = 'BMW'
    this.speed = 240,
    this.model = 'X5',
    this.colors = {
      car: 'Silver',
      interior: 'Black',
      wheels: 'White'
    }
  }

  ngOnInit(): void {
    this.model = 'Audi'
    this.speed = 250,
    this.model = 'RS6',
    this.colors = {
      car: 'White',
      interior: 'Black',
      wheels: 'Silver'
    }
  }

}
