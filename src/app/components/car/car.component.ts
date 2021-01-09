import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.styl']
})
export class CarComponent implements OnInit {

  model:string = 'BMW'

  constructor() { }

  ngOnInit(): void {
    this.model = 'Audi'
  }

}
