import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CarService {

  constructor(private http: HttpClient) {
  }

  getCars(){
    return this.http.get('/server/api/v1/car');
  }

  getCarById(id: number){
    return this.http.get('/server/api/v1/car/' + id);
  }

  saveCar(car){
    return this.http.post('/server/api/v1/car', car, httpOptions);
  }

  deleteCarById(id: number){
    return this.http.delete('/server/api/v1/car/' + id);
  }
}
