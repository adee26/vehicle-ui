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
export class MotorcycleService {

  constructor(private http: HttpClient) { }

  getMotorcycle(){
    return this.http.get('/server/api/v1/motorcycle');
  }

  getMotorcycleById(id: number){
    return this.http.get('/server/api/v1/motorcycle/' + id);
  }

  saveMotorcycle(motorcycle){
    return this.http.post('/server/api/v1/motorcycle', motorcycle, httpOptions);
  }

  deleteMotorcycleById(id: number){
    return this.http.delete('/server/api/v1/motorcycle/' + id);
  }
}
