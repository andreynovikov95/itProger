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
  colors: Colors;
  options: string[];

  constructor() {
    this.name = 'BMW'
    this.speed = 240,
    this.model = 'X5',
    this.colors = {
      car: 'Silver',
      interior: 'Black',
      wheels: 'White'
    }
    this.options = ["ABS", "Автопилот", "Авто Паркинг"]
  }

  ngOnInit(): void {
    this.model = 'Audi'
    this.speed = 250,
    this.model = 'RS Q8',
    this.colors = {
      car: 'White',
      interior: 'Black',
      wheels: 'Silver'
    }
  }

  carSelect = (name: string) => {
    if (name === 'bmw') {
      this.name = 'BMW'
      this.speed = 240,
      this.model = 'X5',
      this.colors = {
        car: 'Silver',
        interior: 'Black',
        wheels: 'White'
      }
      this.options = ["GPS", "круиз-контроль"]
    }

    if (name === 'audi') {
      this.model = 'Audi'
      this.speed = 250,
      this.model = 'RS Q8',
      this.colors = {
        car: 'White',
        interior: 'Black',
        wheels: 'Silver'
      }
      this.options = ["ABS", "Автопилот", "Авто Паркинг"]
    }

    if (name === 'mercedes') {
      this.name = 'Mercedes'
      this.speed = 180,
      this.model = 'C180',
      this.colors = {
        car: 'Silver',
        interior: 'Black',
        wheels: 'White'
      }
      this.options = ["Просмотр фильмов"]
    }
    
  }

}

interface Colors {
  car: string,
  interior: string,
  wheels: string
}