import { Component, OnInit } from '@angular/core';
import { CarService} from '../../services/car.service';
import {BicycleService} from '../../services/bicycle.service';
import {MotorcycleService} from '../../services/motorcycle.service';
import {TractorService} from '../../services/tractor.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  public cars;
  public bicycles;
  public motorcycles;
  public tractors;

  constructor(private carservice:CarService,
              private bicycleservice:BicycleService,
              private motorcycleservce:MotorcycleService,
              private tractorservice: TractorService) { }

  ngOnInit(): void {
    this.getCars();
    this.getBicycles();
    this.getMotorcycles();
    this.getTractors();
  }

  getCars(){
    this.carservice.getCars().subscribe(
      data => {this.cars = data},
      error => console.log(error),
      ()=> console.log('cars loaded')
    )
  }

  getBicycles(){
    this.bicycleservice.getBicycle().subscribe(
      data => {this.bicycles = data},
      error => console.log(error),
      ()=> console.log('bicycles loaded')
    )
  }

  getMotorcycles(){
    this.motorcycleservce.getMotorcycle().subscribe(
      data => {this.motorcycles = data},
      error => console.log(error),
      ()=> console.log('motorcycles loaded')
    )
  }

  getTractors(){
    this.tractorservice.getTractor().subscribe(
      data => {this.tractors = data},
      error => console.log(error),
      ()=> console.log('tractors loaded')
    )
  }

}
