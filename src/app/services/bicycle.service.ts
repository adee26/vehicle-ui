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
export class BicycleService {

  constructor(private http: HttpClient) {

  }

  getBicycle(){
    return this.http.get('/server/api/v1/bicycle');
  }

  getBicycleById(id: number){
    return this.http.get('/server/api/v1/bicycle/' + id);
  }

  saveBicycle(bicycle){
    return this.http.post('/server/api/v1/bicycle', bicycle, httpOptions);
  }

  deleteBicycleById(id: number){
    return this.http.delete('/server/api/v1/bicycle/' + id);
  }
}
